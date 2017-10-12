import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import PagingButton from '../components/PagingButton';

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
        };

        this.onNext = this.onNext.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
    }

    onNext(e) {
        let currentIndex = this.state.currentIndex + 1;
        this.setState({ currentIndex: currentIndex });
    }

    onPrevious(e) {
        let currentIndex = this.state.currentIndex - 1;
        this.setState({ currentIndex: currentIndex });
    }

    render() {
        return (
            <div className="slideshow">
                <PagingButton 
                    className="btn-paging-left" 
                    label="Previous" 
                    onClick={ (e) => this.onPrevious(e) }>
                    <FontAwesome name="fa-angle-left" />
                </PagingButton>
                {this.props.children[this.state.currentIndex]}
                <PagingButton 
                    className="btn-paging-right" 
                    label="Next" 
                    onClick={ (e) => this.onNext(e) } >
                    <FontAwesome name="fa-angle-right" />
                </PagingButton>
            </div>
        );
    }
};

SlideShow.propTypes = propTypes;
SlideShow.defaultProps = defaultProps;