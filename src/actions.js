import C from './constants'

export const addToCart = (event, id) => (
//  {
//      type: C.ADD_TO_CART,
//      event,
//      id
//  }
    (dispatch) => {
        dispatch({
            type: C.ADD_TO_CART,
            event,
            id
        })
        setTimeout(() =>
            dispatch({ type: C.CLOSE_MODAL }),
            2500
        )
    }
)

export const removeFromCart = (event, id) => ({
    type: C.REMOVE_FROM_CART,
    event,
    id
})

export const clickOnProductPreview = (history, id) => ({
    type: C.CLICK_ON_PRODUCT_PREVIEW,
    history,
    id
})

export const sortProducts = (event, sortBy) => ({
    type: C.SORT_PRODUCTS,
    event,
    sortBy
})

export const changeQuantity = (event,id) => ({
    type: C.CHANGE_PRODUCT_QUANTITY,
    event,
    id
})

export const closeModal = () => ({
    type: C.CLOSE_MODAL
})

export const clickOnGoToCart = (history) => ({
    type: C.CLICK_ON_GO_TO_CART,
    history
})

// export const clickOnProductLink = (history, id) => ({
//     type: C.CLICK_ON_PRODUCT_LINK,
//     history,
//     id
// })

// export const openModal = (id) => ({
//     type: C.OPEN_MODAL,
//     id
// })