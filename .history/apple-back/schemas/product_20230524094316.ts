import {RiMacbookLine} from 'react-icons/ri'
import {Rule, SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: RiMacbookLine,
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
      type: 'reference',
      to: [{type: 'product'}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default product
