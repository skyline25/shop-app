import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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
        <li className="preview" onClick={onProductClick}>
            <img 
                className="preview-image" 
                src={image} 
                width="200px" 
                height="200px"
                alt={title}
            />
            <h3 className="preview-title">{title}</h3>
            <p className="preview-description">{description}</p>
            <p><strong>Warranty: {warranty} month</strong></p>
            <p><strong>Price: {price} $</strong></p>
            <p><strong>By {manufacturer}</strong></p>
            <button 
                className="button primary"
                onClick={onBuyButtonClick}
            >Buy</button>
        </li>
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
    history: PropTypes.object,
}

export default withRouter(ProductPreview)