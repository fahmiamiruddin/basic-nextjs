import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_BY_ID } from '../../schema'
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
  const products = category.products;
  return (
    <div className={styles.main}>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content="{category.name}" />
      </Head>
      { category.image && <Image width='500px' height='300px' src={category.image} alt={category.name} /> }
      <h1>{category.id}. {category.name}</h1>
      <h3>Product List</h3>

      {
        products.items && products.items.length > 0 ? (
          <div className={styles.containercard}>
            {
              products.items.map(product => (
                <Link href={{pathname:`/products/${product.sku}`}} key={product.id}>
                  <div className={styles.cardku}>
                    <Image width='100px' height='100px' src={product.image?.url} alt={product.name} />
                    <p style={{borderTop:'1px solid black', padding:'3px'}}>{product.name}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Category