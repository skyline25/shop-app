import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from './PageTemplate'
import ProductInCartPreview from './ProductInCartPreview'
import '../styles/Cart.scss'

const Cart = ({
    history,
    onProductClick,
    products=[],
    onRemoveClick=f=>f,
    onChangeQuantity=f=>f
}) => {
    let totalPrice = products.filter( product => product.quantityInCart > 0 ).reduce(
        ( accumulator, currentValue ) => +accumulator + ( currentValue.price * currentValue.quantityInCart ), 0
    )

    return (
        <PageTemplate>
            <div className="cart">
                <h1>Cart</h1>
                <h2>Products in your cart</h2>
                <ul className="cart-list">
                    { products.filter( product => product.quantityInCart > 0 ).map(product =>
                        <ProductInCartPreview
                            key={product.id}
                            productId={product.id}
                            image={product.image}
                            title={product.title}
                            // warranty={product.warranty}
                            quantity={product.quantityInCart}
                            price={product.price}
                            onRemoveClick={(e)=>onRemoveClick(e,product.id)}
                            onProductClick={()=>onProductClick(history, product.id)}
                            onChangeQuantity={(e)=>onChangeQuantity(e, product.id)}
                        />
                    )}
                </ul>
                <h3>{totalPrice > 0 ? `Total price: ${totalPrice} $` : 'No products in cart' }</h3>
            </div> 
        </PageTemplate>
    )
}

Cart.propTypes = {
    history: PropTypes.object,
    products: PropTypes.array,
    onProductClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onChangeQuantity: PropTypes.func
}

export default Cart