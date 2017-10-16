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

        const content = this.state.content;

        let output = null;
        
        if (this.state.content)  {
            output = <pre>${this.state.content}</pre>;
        }

        return (
            <pre>
            {content}
            </pre>
        );
    }
};

Gist.propTypes = propTypes;