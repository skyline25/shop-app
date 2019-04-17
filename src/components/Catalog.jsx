import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from './PageTemplate'
// import ProductSearch from './ProductSearch'
import ProductList from './ProductList'
import Modal from './Modal'
import { SortMenuContainer } from '../containers';

const Catalog = ({
    products,
    sort,
    // modal,
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
                {/* <Modal
                    modal={modal}
                /> */}
            </div>
        </PageTemplate>
    )
}

Catalog.propTypes = {
    productList: PropTypes.array,
    onSearch: PropTypes.func,
    onBuyButtonClick: PropTypes.func,
    onProductClick: PropTypes.func
}

export default Catalog