import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button' 
import DeleteIcon from '@material-ui/icons/Delete'
import Fab from '@material-ui/core/Fab'
import Input from '@material-ui/core/Input'
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
            <span className="cart-item__title" onClick={onProductClick}>{title}</span>
            {/* <span className="cart-item__warranty">Warranty: <strong>{warranty}</strong></span> */}
            <span className="cart-item__quantity">
                <strong>Qty: <input
                        className="cart-item__input" 
                        type="number"
                        name="quantity" 
                        id="quantityInCart"
                        value={quantity}
                        onChange={onChangeQuantity}
                    /> pc.
                </strong>
            </span>
            <span className="cart-item__quantity"><strong>Price: {quantity*price} $</strong></span>

            <Fab 
                onClick={onRemoveClick}
                aria-label="Delete"
                color="secondary"
                size="small"
            >
                <DeleteIcon />
            </Fab>

            {/* <button 
                className="preview-button"
                onClick={onRemoveClick}
            >Remove</button> */}
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
    onChangeQuantity: PropTypes.func
}

export default ProductInCartPreview