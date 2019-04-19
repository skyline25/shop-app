import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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
        title = products.find(product=>product.id===modal.id).title
    }

    return (
        <div className={modal.isOpen ? `modal is-open` : `modal is-close`}>
            <div className="modal__overlay" onClick={onModalClose}></div>
            <div className="modal__content">
                <div>
                    <Button
                        color="primary" 
                        onClick={()=>onProductClick(history,modal.id)}
                    >{title}</Button>
                </div>
                <div>
                    <Typography variant="subtitle2" inline>is already in</Typography>
                    <Button 
                        color="primary"
                        onClick={()=>onGoToCartClick(history)}
                    >CART</Button>
                </div>
                {/* <h3>
                    <span
                        className="modal__link modal__link_name"
                        onClick={()=>onProductClick(history,modal.id)}
                    >{title}</span> is already in  */}
                    {/* FIXIT */}
                    {/*modal.isOpen&&products
                        .find(product=>product.id===modal.id)
                        .quantityInCart===0?
                        ` - successfull added to `:
                        ` - is already in `*/}
                    {/* <span
                        className="modal__link"
                        onClick={()=>onGoToCartClick(history)}
                    > cart</span>
                </h3> */}
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
    onModalClose: PropTypes.func,
    onGoToCartClick: PropTypes.func,
    onProductClick: PropTypes.func,
    history: PropTypes.object
}

export default withRouter(Modal)
