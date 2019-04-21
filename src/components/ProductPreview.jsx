import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'

// import { store } from '../store'
// import { addToCart } from '../actions'

import '../styles/ProductPreview.scss'

const ProductPreview = ({
    // productId,
    title,
    image,
    description,
    warranty,
    price,
    manufacturer,
    onBuyButtonClick,
    onProductClick,
    // history
}) => {    
    return (
        // <li className="preview" onClick={()=>onProductClick(history,productId)}>
        <li className="preview" onClick={onProductClick}>
            <h3 className="preview-title">{title}</h3>
            <img 
                className="preview-image" 
                src={image} 
                width="200px" 
                height="200px"
                alt={title}
            />
            <p className="preview-description">{description}</p>
            <p><strong>Warranty: {warranty} month</strong></p>
            <p><strong>Price: {price} $</strong></p>
            <p><strong>By {manufacturer}</strong></p>
            <Button
                onClick={onBuyButtonClick}
                color="secondary"
                variant="contained"
            >Buy</Button>
            {/* <button 
                className="preview-button"
                onClick={onBuyButtonClick}
            >Buy</button> */}
        </li>
    )
}

ProductPreview.propTypes = {
    // productId: PropTypes.string,
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