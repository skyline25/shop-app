import React from 'react'
import PropTypes from 'prop-types'

import '../styles/ProductSearch.scss'

const ProductSearch = ({ onChange }) => {
    return (
        <div className="product-search">
            <input
                className="product-search__input" 
                type="text"
                placeholder="To search start typing here..."
                onChange={onChange}
            /> 
        </div>
    );
};

ProductSearch.propTypes = {
    onChange: PropTypes.func
}

export default ProductSearch