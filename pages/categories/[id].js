import styles from '@styles/Home.module.css'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_BY_ID } from './schema'
import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_ID, {
    variables: {
      categoryId: id
    }
  });
  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;
  const {category} = data;
  return (
    <div className={styles.main}>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content="{category.name}" />
      </Head>
      <h1>Detail Categories</h1>
      <h3>{category.id}. {category.name}</h3>
    </div>
  )
}

export default Category