import {MdMenuBook} from 'react-icons/md'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdMenuBook,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
