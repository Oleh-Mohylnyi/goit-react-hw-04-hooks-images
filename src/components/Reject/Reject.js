import noFound from '../../images/NothingFoundIcon.png'
import React from 'react';
import PropTypes from 'prop-types'

export default function Reject({ searchQuery }) {
    return (
        <div className="Div-loader">
          <p>by request: "<span>{searchQuery}</span>" nothing found</p>
          <img src={noFound} alt="" className="Logo-image" />
        </div>
    )
}

Reject.propTypes = {
    searchQuery: PropTypes.string,
}