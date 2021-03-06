import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../styles/Modal.scss'

const Modal = ({
    modal,
    products,
    onModalClose,
    onGoToCartClick,
    onProductClick,
    history
}) => {
    let title = ''
    
    if (modal.isOpen) {
        title = products.find( product => product.id === modal.id ).title
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
                    {title}</span><br/>is already in <span
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

Modal.propTypes = {
    modal: PropTypes.object,
    products: PropTypes.array,
    history: PropTypes.object,
    onModalClose: PropTypes.func,
    onGoToCartClick: PropTypes.func,
    onProductClick: PropTypes.func,
}

export default withRouter(Modal)
