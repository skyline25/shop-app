import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from './PageTemplate'
// import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import { SortMenuContainer } from '../containers';

const Catalog = ({
    products,
    sort,
    // onSearch,
    onBuyButtonClick=f=>f,
    onProductClick=f=>f
}) => {
    return (
        <PageTemplate>
            <div>
                <h1>Catalog</h1>
                {/* <ProductSearch
                    onChange={onSearch}
                /> */}
                <SortMenuContainer/>
                <ProductList
                    products={products}
                    sort={sort}
                    onBuyButtonClick={onBuyButtonClick}
                    onProductClick={onProductClick}
                />
            </div>
        </PageTemplate>
    )
}

Catalog.propTypes = {
    productList: PropTypes.array,
    sort: PropTypes.string,
    // onSearch: PropTypes.func,
    onBuyButtonClick: PropTypes.func,
    onProductClick: PropTypes.func
}

export default Catalog