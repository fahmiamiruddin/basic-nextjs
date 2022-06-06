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
import Grid from '@material-ui/core/Grid'
import Nav from '@components/Nav'
import ProductCard from '@components/Product/ProductCard'

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
              <Grid container spacing={3}>
                {
                  Array.from(new Array(6)).map((data, index) => (
                    <Grid item xs={4} key={index}>
                      <Skeleton key={index} variant="rect" width={350} height={315} animation="wave" />
                    </Grid>
                  ))
                }
              </Grid>
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
              <Grid container spacing={3}>
                  {
                    products.items.map(product => (
                      <Grid item xs={4} key={product.id}>
                        <ProductCard data={product} />
                      </Grid>
                    ))
                  }
              </Grid>
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