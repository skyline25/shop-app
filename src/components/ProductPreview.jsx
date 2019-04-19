import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import '../styles/ProductPreview.scss'

const ProductPreview = ({
  title,
  image,
  description,
  warranty,
  price,
  manufacturer,
  onBuyButtonClick,
  onProductClick,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            className="product-preview__image"
            image={image}
            title={title}
            onClick={onProductClick}
          />
        </CardActionArea>

        <CardContent>
          <Typography 
            className="product-preview__title" 
            component="h3" 
            variant="h5"
            align="center"
            paragraph
            >{title}</Typography>

          <Typography 
            className="product-preview__description"
            component="p"
            paragraph
          >{description}</Typography>        
          
          <Typography 
            className="product-preview__description"
            component="p"
            variant="subtitle2"
            paragraph
          >Warranty: {warranty} month</Typography>

          <Typography 
            className="product-preview__description"
            component="p"
            variant="subtitle2"
            paragraph
          >Price: {price} $</Typography>

          <Typography 
            className="product-preview__description"
            component="p"
            variant="subtitle2"
            paragraph
          >By {manufacturer}</Typography>

          <Button
            className="product-preview__button"
            onClick={onBuyButtonClick}
            color="primary"
            variant="contained"
          >Buy</Button>
          
        </CardContent>
      </Card>
      
      {/* <li className="preview" onClick={()=>onProductClick(history,productId)}> */}
                {/* <h3 className="preview-title">{title}</h3>
                <p className="preview-description">{description}</p>
                <p><strong>Warranty: {warranty} month</strong></p>
                <p><strong>Price: {price} $</strong></p>
                <p><strong>By {manufacturer}</strong></p>
                <button 
                    className="preview-button"
                    onClick={onBuyButtonClick}
                >Buy</button> */}
            
    </Grid>
  )
}

ProductPreview.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    warranty: PropTypes.number,
    price: PropTypes.number,
    manufacturer: PropTypes.string,
    onBuyButtonClick: PropTypes.func,
    onProductClick: PropTypes.func,
}

export default withRouter(ProductPreview);