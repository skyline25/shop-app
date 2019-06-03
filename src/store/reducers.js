import C from '../constants'

export const products = ( state=[], action ) => {
    console.log(state, action)
    let selectedProduct = state.find(product => product.id === action.id)
    
    switch (action.type) {
        case C.ADD_TO_CART:
            if (selectedProduct.quantityInCart===0) {
                selectedProduct.quantityInCart=1    
                return [...state]
            }

            return state
            
        case C.REMOVE_FROM_CART:
            action.event.stopPropagation()
            selectedProduct.quantityInCart=0
            return [...state]

        case C.CLICK_ON_PRODUCT_PREVIEW:
            action.history.push(`/catalog/${action.id}`)
            return [...state]
        
        case C.CHANGE_PRODUCT_QUANTITY:
            selectedProduct.quantityInCart=+action.event.target.value
            return [...state]

        default:
            return state
    }
}

export const sort = ( state='', action ) => {
    console.log(state,action)
    switch (action.type) {
        case C.SORT_PRODUCTS:
            action.event.preventDefault()
            return action.sortBy
        
        default: 
            return state
    }
}

export const modal = ( state={}, action ) => {
    console.log(state,action)
    switch (action.type) {
        case C.ADD_TO_CART:
            state.id=action.id
            state.isOpen=true
            return {...state}

        case C.CLOSE_MODAL:
            state.isOpen=false
            state.id="undefined"
            return {...state}
        
        case C.CLICK_ON_GO_TO_CART:
            action.history.push(`/cart`)
            state.isOpen=false
            state.id="undefined"
            return {...state}

        case C.CLICK_ON_PRODUCT_PREVIEW:
            state.isOpen=false
            state.id="undefined"
            return {...state}

        // case C.CLICK_ON_PRODUCT_LINK:
        //     action.history.push(`/catalog/${action.id}`)
        //     state.isOpen=false
        //     state.id="undefined"
        //     return {...state}
            
        default:
            return state
    }
}