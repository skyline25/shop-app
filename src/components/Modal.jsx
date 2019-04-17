import React from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/Modal.scss'

const Modal = ({
    modal,
    products,
    onModalClose,
    onGoToCartClick,
    onProductClick,
    history
}) => {
    if (modal.isOpen) {
        console.log(   
            products
                .filter(product=>product.quantityInCart>0)
                .find(product=>product.id===modal.id)
                .quantityInCart
        )
    }

    return (
        <div 
            className={modal.isOpen?`modal is-open`:`modal is-close`}>
            <div className="modal__overlay" onClick={onModalClose}></div>
            <div className="modal__content">
                <h3>
                    <span
                        className="modal__link modal__link_name"
                        onClick={()=>onProductClick(history,modal.id)}
                    >
                    {modal.isOpen?
                        products.find(product=>product.id===modal.id).title:
                        "Undefined"}
                    </span> is already in 
                    {/* Not working */}
                    {/*modal.isOpen&&products
                        .find(product=>product.id===modal.id)
                        .quantityInCart===0?
                        ` - successfull added to `:
                        ` - is already in `*/}
                    <span
                        className="modal__link"
                        onClick={()=>onGoToCartClick(history)}
                    > cart</span>
                </h3>
                <div 
                    className="modal__button modal__button_close"
                    onClick={onModalClose}
                >&times;</div>
            </div>
        </div>
    )
}

export default withRouter(Modal)
