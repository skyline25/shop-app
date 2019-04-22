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
        <li className="card preview">
            <img 
                className="card-image" 
                src={image}
                alt={title} 
                onClick={onProductClick}
            />
            <div className="card-info">
                <h3 className="card-title" onClick={onProductClick}>{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-properties"><strong>Warranty: {warranty} month</strong></p>
                <p className="card-properties"><strong>Price: {price} $</strong></p>
                <p className="card-properties"><strong>By {manufacturer}</strong></p>
                <button 
                    className="button primary"
                    onClick={onBuyButtonClick}
                >Buy</button>
            </div>
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