import {RiMacbookLine} from 'react-icons/ri'
import {Rule, SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {
  title: 'Product',
  name: 'product',
  type: 'document',
  // icon: RiMacbookLine,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Parent Product',
      name: 'parents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    },
  ],
  preview: {
    select: {title: 'title', media: 'image '},
  },
}

export default product

// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   icon: RiMacbookLine,
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'array',
//       of: [{type: 'image'}],
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'reference',
//       to: [{type: 'category'}],
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'blockContent',
//     },
//   ],
// }
