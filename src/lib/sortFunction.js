import C from '../constants'

const sortFunction = (sort,products) => {
    switch (sort) {
        case C.SORTED_BY_PRICE:
            return [...products].sort((a,b)=>{
                return a.price - b.price
            })
            
        case C.SORTED_BY_TITLE:
            return [...products].sort((a,b)=>{
                return a.title > b.title? 1: -1
            })
        
        case C.SORTED_BY_WARRANTY:
            return [...products].sort((a,b)=>{
                return b.warranty - a.warranty
            })

        default:
            return products
    }
}

export default sortFunction