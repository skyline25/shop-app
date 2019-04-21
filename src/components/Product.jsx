import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import PageTemplate from './PageTemplate'

import '../styles/Product.scss'

const Product = ({
    match,
    products,
    onBuyButtonClick
}) => {
    console.log(match)
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
            <div className="product">
                <div className="product-image">
                    <img src={image} alt={title}/>
                </div>
                
                <div className="product-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Warranty: {warranty} month</strong></p>
                    <p><strong>By {manufacturer}</strong></p>
                    <p><strong>Price: {price} $</strong></p>
                    {/* <button 
                        className="preview-button"
                        onClick={(event) => onBuyButtonClick(event, id)}
                    >Buy</button> */}
                    <Button
                        onClick={(event) => onBuyButtonClick(event, id)}
                        color="secondary"
                        variant="contained"
                    >Buy</Button>
                </div>
            </div>  
        </PageTemplate>
    )
}

Product.propTypes = {
    match: PropTypes.object,
    products: PropTypes.array,
    onBuyButtonClick: PropTypes.func
}

export default Product