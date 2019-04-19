import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import sortFunction from '../lib/sortFunction'

import ProductPreview from './ProductPreview'
// import '../styles/ProductList.scss'

const ProductList = ({ 
  products,
  sort,
  onBuyButtonClick,
  onProductClick,
  history
}) => {
  return (
    <div>
      <Typography
        component="h2" 
        variant="h4"
        paragraph
      >Product list</Typography>
        <Grid
          container 
          spacing={16}>
          {
            sortFunction( sort, products ).map( product =>
              <ProductPreview
                key={product.id}
                productId={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                warranty={product.warranty}
                price={product.price}
                manufacturer={product.manufacturer}
                onBuyButtonClick={(e)=>onBuyButtonClick(e,product.id)}
                // onProductClick={()=>history.push(`/catalog/${product.id}`)}
                onProductClick={()=>onProductClick(history,product.id)}
              />
            )
          }
        </Grid> 
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array,
  sort: PropTypes.string,
  onBuyButtonClick: PropTypes.func,
  onProductClick: PropTypes.func,
  history: PropTypes.object
}

export default withRouter( ProductList )