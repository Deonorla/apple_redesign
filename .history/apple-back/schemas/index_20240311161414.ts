import product from './product'
import category from './category'
import {user, account} from 'next-auth-sanity/schemas'

export const schemaTypes = [product, category, user, account]
