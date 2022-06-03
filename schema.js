import { gql, useQuery } from '@apollo/client'

export const GET_CATEGORIES = gql`
  {
    categories(filters:{}) {
      items{
        id
        image
        image_path
        name
        product_count
      }
    }
  }
`;

export const GET_CATEGORY_BY_ID = gql`
  query getCategories($categoryId: Int)
  {
    category(id: $categoryId) {
      id
      name
      image
      image_path
      products(pageSize: 20) {
        items {
          id
          name
          sku
          image {
            label
            url
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SKU = gql`
  query getProducts($sku: String)
  {
    products(
      filter: {
        sku: {
          eq: $sku
        }
      }
    ) {
      items {
        name
        sku
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        special_price
        image {
          url
        }
        description {
          html
        }
      }
    }
  }  
`;

export const POST_SUBSCRIBE = gql`
  mutation subscribeEmail($email: String)
  {
    subscribe(
      input: {email: $email}
    ) {
      status {
        code
        message
        response
      }
    }
  }
`;