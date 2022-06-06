import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_BY_ID } from '../../schema'
import { useRouter } from 'next/router' 
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Nav from '@components/Nav'

const Category = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_ID, {
    variables: {
      categoryId: id
    }
  });

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh'}}>
          <Nav/>
          <div className={styles.main}>
            <Skeleton variant="rect" width={500} height={300} animation="wave" />
            <Typography component="div" variant="h1">
              <Skeleton variant="text" width={300} animation="wave" />
            </Typography>
            <h3>Product List</h3>

            {
              <div className={styles.containercard}>
                {
                  Array.from(new Array(8)).map((index) => (
                    <Skeleton key={index} variant="rect" width={325} height={187} animation="wave" />
                  ))
                }
              </div>
            }
          </div>
        </Box>
      </Container>
    );
  }

  if (error) return `Error! ${error}`;
  const {category} = data;
  const products = category.products;
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: '100vh'}}>
        <Nav/>
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
      </Box>
    </Container>
  )
}

export default Category