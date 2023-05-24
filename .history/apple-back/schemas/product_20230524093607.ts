import {RiMacbookLine} from 'react-icons/ri'
import {Rule, SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  // icon: RiMacbookLine,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
}

export default product

// title: 'Product',
//   name: 'product',
//   type: 'document',
//   // icon: RiMacbookLine,
//   fields: [
//     {
//       title: 'Title',
//       name: 'title',
//       type: 'string',
//       validation: (rule: Rule) => rule.required(),
//     },
//     {
//       title: 'Slug',
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 100,
//       },
//       validation: (rule: Rule) => rule.required(),
//     },
//     {
//       title: 'SKU',
//       name: 'sku',
//       type: 'string',
//     },
//     {
//       title: 'Image',
//       name: 'image',
//       type: 'image',
//     },
//     {
//       title: 'Parent Product',
//       name: 'parents',
//       type: 'array',
//       of: [{type: 'reference', to: [{type: 'product'}]}],
//     },
//   ],
//   preview: {
//     select: {title: 'title', media: 'image '},
//   },
