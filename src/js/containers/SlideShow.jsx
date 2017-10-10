import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    currentIndex: PropTypes.number,
};

const defaultProps = {
    currentIndex: 0,
};

export default class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: props.currentIndex,
        }
    }

    onNext() {
        let currentIndex = this.state.currentIndex;
        this.setState({ currentIndex: currentIndex++ });
    }

    onPrevious() {
        let currentIndex = this.state.currentIndex;
        this.setState({ currentIndex: currentIndex-- });
    }

    render() {
        return (
            <div className="slideshow">
                {this.props.children}
            </div>
        );
    }
};

SlideShow.PropTypes = propTypes;
SlideShow.DefaultProps = defaultProps;