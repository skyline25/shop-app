import React from 'react'
import PropTypes from 'prop-types'

import PageTemplate from './PageTemplate'

const Page404 = ({
    location
}) => {
    let style = {
        textTransform: 'uppercase'
    }
    return (
        <PageTemplate>
            <div className="page-404">
                <h1>
                    Page <span style={style}>{location.pathname.slice(1)}</span> not found!
                </h1>
            </div>
        </PageTemplate>
    )
}

Page404.propTypes = {
    location: PropTypes.object
}

export default Page404
