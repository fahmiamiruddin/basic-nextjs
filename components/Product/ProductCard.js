import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductCard = ({data}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={data.id}>
      <Link href={{pathname:`/products/${data.sku}`}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.image?.url}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Link href={{pathname:`/products/${data.sku}`}} key={data.id}>
        <CardActions>
          <Button size="small" color="primary">
            {data.price_range.minimum_price.regular_price.currency} {data.price_range.minimum_price.regular_price.value}
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default ProductCard