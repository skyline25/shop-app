import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PageTemplate from './PageTemplate'
import Typography from '@material-ui/core/Typography'

import '../styles/Product.scss'

const Product = ({
    match,
    products,
    onBuyButtonClick
}) => {
    let {
        id,
        image,
        title,
        description,
        warranty,
        price,
        manufacturer
    } = products.find( product => product.id === match.params.productId )
    
    return (
        <PageTemplate>
            <Grid
                className="product"
                container 
                spacing={16}
            >   
                <Grid 
                    className="product-image"
                    item xs={12} sm={6}
                >
                    <img src={image} alt={title}/>
                </Grid>
                <Grid 
                    className="product-info"
                    item xs={12} sm={6}
                >
                    <Typography 
                        // className="product-preview__title" 
                        component="h1" 
                        variant="h5"
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
                        onClick={ (event) => onBuyButtonClick(event, id) }
                        color="primary"
                        variant="contained"
                    >Buy</Button>
                    
                    {/* <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Warranty: {warranty} month</strong></p>
                    <p><strong>By {manufacturer}</strong></p>
                    <p><strong>Price: {price} $</strong></p>
                    <button 
                        className="preview-button"
                        onClick={(event) => onBuyButtonClick(event, id)}
                    >Buy</button> */}
                    
                </Grid>       
            </Grid>
        </PageTemplate>
    )
}

Product.propTypes = {
    match: PropTypes.object,
    products: PropTypes.array,
    onBuyButtonClick: PropTypes.func
}

export default Product