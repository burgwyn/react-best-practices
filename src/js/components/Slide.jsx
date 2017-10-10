import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.node.isRequired
}

const Slide = ({title, children}) => (
    <div className="slide">
        <div className="title">
            <h1>{title}</h1>
            <hr/>
        </div>
        <div className="body">
            {children}
        </div>
    </div>
);

Slide.propTypes = propTypes;

export default Slide;
