import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from './PageTemplate'

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
            <div className="product container wrap">
                <div className="product-image">
                    <img src={image} alt={title}/>
                </div>
                
                <div className="product-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Warranty: {warranty} month</strong></p>
                    <p><strong>By {manufacturer}</strong></p>
                    <p><strong>Price: {price} $</strong></p>
                    <button 
                        className="button primary"
                        onClick={(event) => onBuyButtonClick(event, id)}
                    >Buy</button>
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