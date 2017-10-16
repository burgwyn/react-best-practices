import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {
    rawUrl: PropTypes.string.isRequired,
}

export default class Gist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null,
        }
    }

    componentDidMount() {
        axios.get(this.props.rawUrl)
        .then(function (response) {
          this.setState({content: response.data});
        }.bind(this))
        .catch(function (error) {
            this.setState({content: 'Could not get Gist'});
        }.bind(this));
    }

    render() {
        return (
            <pre>
                {this.state.content}
            </pre>
        );
    }
};

Gist.propTypes = propTypes;