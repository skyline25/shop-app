import React from 'react'
import PropTypes from 'prop-types'
 
import '../styles/ProductInCartPreview.scss'

const ProductInCartPreview = ({
    title,
    image,
    // warranty,
    quantity,
    price,
    onRemoveClick,
    onProductClick,
    onChangeQuantity
}) => {
    return (
        <li className="cart-item">
            <div className="cart-item__image" onClick={onProductClick}>
                <img 
                    src={image}
                    alt={title}
                />
            </div>
            <span className="cart-item__title">
                <span onClick={onProductClick}>{title}</span>
            </span>
            {/* <span className="cart-item__warranty">Warranty: <strong>{warranty}</strong></span> */}
            <span className="cart-item__quantity">
                <strong><span className="sub-title">Qty: </span><input
                    className="cart-item__input" 
                    type="number"
                    name="quantity" 
                    id="quantityInCart"
                    value={quantity}
                    onChange={onChangeQuantity}
                /> pc.</strong></span>
            <span className="cart-item__quantity"><strong><span className="sub-title">Price: </span>{quantity*price} $</strong></span>
            <button 
                className="button secondary"
                onClick={onRemoveClick}
            >Remove</button>
        </li>
    )
}

ProductInCartPreview.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    // warranty: PropTypes.number,
    quantity: PropTypes.number,
    price: PropTypes.number,
    onRemoveClick: PropTypes.func,
    onProductClick: PropTypes.func,
    onChangeQuantity: PropTypes.func,
}

export default ProductInCartPreview