import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

class PagingButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick();
    }

    render() {
        const { label, children, className} = this.props;
        return (
            <button
                aria-label={label}
                className={className}
                onClick={this.onClick}
                title={label}
                >
                {children}
            </button>
        );
    }
}

export default PagingButton;