import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
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
                <Typography
                    component="h1" 
                    variant="h3"
                    paragraph
                >Catalog</Typography>
                <Divider/>
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
    products: PropTypes.array,
    sort: PropTypes.string,
    // onSearch: PropTypes.func,
    onBuyButtonClick: PropTypes.func,
    onProductClick: PropTypes.func
}

export default Catalog