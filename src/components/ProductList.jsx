import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import sortFunction from '../lib/sortFunction'

import ProductPreview from './ProductPreview'
import '../styles/ProductList.scss'

const ProductList = ({ 
    products,
    sort,
    history,
    onBuyButtonClick,
    onProductClick,
}) => {
    return (
        <div>
            <h2>Product list</h2>
                <ul className="product-list container wrap">
                    {
                        sortFunction(sort,products).map(product =>
                            <ProductPreview
                                key={product.id}
                                title={product.title}
                                image={product.image}
                                description={product.description}
                                warranty={product.warranty}
                                price={product.price}
                                manufacturer={product.manufacturer}
                                onBuyButtonClick={(e)=>onBuyButtonClick(e,product.id)}
                                // onProductClick={()=>history.push(`/catalog/${product.id}`)}
                                onProductClick={()=>onProductClick(history,product.id)}
                            />
                        )
                    }
                </ul> 
        </div>
    )
}

ProductList.propTypes = {
    sort: PropTypes.string,
    products: PropTypes.array,
    history: PropTypes.object,
    onBuyButtonClick: PropTypes.func,
    onProductClick: PropTypes.func
}

export default withRouter( ProductList )