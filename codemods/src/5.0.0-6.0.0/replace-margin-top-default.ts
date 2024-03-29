import { JSXAttribute, Transform } from 'jscodeshift'

/**
 * Codemod to update `marginTop="default" to directly-supported values
 * ```
 * npx jscodeshift -t node_modules/evergreen-ui/codemods/dist/5.0.0-6.0.0/replace-margin-top-default.js --parser=tsx --extensions=js,ts,tsx <your file target> --dry --print
 * ```
 *
 * Converts:
 * <Heading marginTop="default" /> to <Heading marginTop={24} />
 * <Heading size={100} marginTop="default">...</Heading> to <Heading size={100} marginTop={16} />
 * ...etc
 */

const SIZE_TO_MARGIN_TOP_MAPPING = {
  Heading: {
    defaultSize: 500,
    sizes: {
      100: 16,
      200: 16,
      300: 16,
      400: 16,
      500: 24,
      600: 28,
      700: 40,
      800: 40,
      900: 52
    }
  },
  Paragraph: {
    defaultSize: 400,
    sizes: {
      300: 12,
      400: 12,
      500: 16
    }
  },
  Text: {
    defaultSize: 400,
    sizes: {
      300: 12,
      400: 12,
      500: 16,
      600: 28
    }
  }
}

const elements: Array<keyof typeof SIZE_TO_MARGIN_TOP_MAPPING> = ['Heading', 'Text', 'Paragraph']

const transformer: Transform = (file, api) => {
  const j = api.jscodeshift

  const root = j(file.source)
  elements.forEach(elementName => {
    const elements = root.findJSXElements(elementName)

    elements.forEach(el => {
      const attributes = (el.node.openingElement.attributes ?? []) as JSXAttribute[]
      const sizeAttribute = attributes.find(attr => attr.name.name === 'size')
      const marginTopAttribute = attributes.find(attr => attr.name.name === 'marginTop')

      /* @ts-ignore */
      if (marginTopAttribute && marginTopAttribute.value && marginTopAttribute.value.value === 'default') {
        const componentSize =
          (sizeAttribute &&
            sizeAttribute.value &&
            /* @ts-ignore */
            sizeAttribute.value.expression &&
            /* @ts-ignore */
            sizeAttribute.value.expression.value) ||
          /* @ts-ignore */
          SIZE_TO_MARGIN_TOP_MAPPING[elementName].defaultSize
        marginTopAttribute.value = j.jsxExpressionContainer(
          /* @ts-ignore */
          j.literal(SIZE_TO_MARGIN_TOP_MAPPING[elementName].sizes[componentSize])
        )
      }
    })
  })

  return root.toSource()
}

export default transformer
