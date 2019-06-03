import React from 'react'
import PropTypes from 'prop-types'

import { MenuContainer } from '../containers'

import '../styles/PageTemplate.scss';

const PageTemplate = ({children}) => {
    return (
        <div className="page-template">
            <MenuContainer/>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

PageTemplate.propTypes = {
    children: PropTypes.element
}

export default PageTemplate