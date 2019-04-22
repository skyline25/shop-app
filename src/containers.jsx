import { connect } from 'react-redux'
import { 
    addToCart, 
    removeFromCart, 
    clickOnProductPreview,
    sortProducts,
    changeQuantity,
    closeModal,
    clickOnGoToCart,
    // clickOnProductLink
} from './actions'

import Cart from './components/Cart'
import Catalog from './components/Catalog'
import Menu from './components/Menu'
import Product from './components/Product'
import SortMenu from './components/SortMenu'
import Modal from './components/Modal'
import ProductList from './components/ProductList';

export const CartContainer = connect(
    state => ({
        products: state.products
    }),
    dispatch => ({
        onRemoveClick(e,id) {
            dispatch(removeFromCart(e,id))
        },
        onProductClick(history, id) {
            dispatch(clickOnProductPreview(history, id))
        },
        onChangeQuantity(e,id) {
            dispatch(changeQuantity(e,id))
        }
    })
)(Cart)

export const ProductListContainer = connect(
    state => ({
        products: state.products,
        sort: state.sort,
    }),
    dispatch => ({
        onBuyButtonClick(e,id) {
            dispatch(addToCart(e,id))
        },
        onProductClick(history, id) {
            dispatch(clickOnProductPreview(history, id))
        }
    })
)(ProductList)

export const ProductContainer = connect(
    state => ({
        products: state.products
    }),
    dispatch => ({
        onBuyButtonClick(e,id) {
            dispatch(addToCart(e,id))
        }
    })
)(Product)

export const MenuContainer = connect(
    state => ({
        products: state.products
    })
)(Menu)

export const SortMenuContainer = connect(
    state => ({
        sort: state.sort
    }),
    dispatch => ({
        onSelect(e,sortBy) {
            dispatch(sortProducts(e,sortBy))
        }
    })
)(SortMenu)

export const ModalContainer = connect(
    state => ({
        modal: state.modal,
        products: state.products
    }),
    dispatch => ({
        onModalClose() {
            dispatch(closeModal())
        },
        onProductClick(history, id) {
            dispatch(clickOnProductPreview(history, id))
        },
        // onProductLinkClick(history, id) {
        //     dispatch(clickOnProductLink(history, id))
        // },
        onGoToCartClick(history) {
            dispatch(clickOnGoToCart(history))
        }
    })
)(Modal)