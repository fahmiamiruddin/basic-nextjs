import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import useStyles from './style'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT_BY_SKU } from '../categories/schema'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
// });

const Product = () => {
  const classes = useStyles();
  const router = useRouter();
  const { sku } = router.query;
  
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_SKU, {
    variables: {
      sku: sku
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  const {products} = data;
  const product = products.items;

  return (
    <div className={styles.main}>
      <Head>
        <title>{sku}</title>
        <meta name="description" content="Fetch with SSG" />
      </Head>
      <h3>Detail Produk</h3>
      {
        product[0] ? (
          <div style={{marginTop:'10px', padding:'10px'}}>
            <Image width='500px' height='300px' src={product[0].image?.url} alt={product[0].name} />
            <h3>&#128203; Nama produk : {product[0].name}</h3>
            <hr/>
            <p>&#128180; harga: {product[0].price.regularPrice.amount.currency} {product[0].price.regularPrice.amount.value}</p>
            <p><Button className={classes.root} variant="contained" color="primary">Add To Cart</Button></p>
            <p>&#127988; deskripsi: 
              <span dangerouslySetInnerHTML={{ __html: product[0].description.html }} />
            </p>
          </div>
        ) : (
          <p>Loading . . .</p>
        )
      }
    </div>
  )
}

export default Product