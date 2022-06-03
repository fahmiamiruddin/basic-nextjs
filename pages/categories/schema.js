import { gql, useQuery } from '@apollo/client'

export const GET_CATEGORIES = gql`
  {
    categories(filters:{}) {
      items{
        id
        name
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
    }
  }
`;