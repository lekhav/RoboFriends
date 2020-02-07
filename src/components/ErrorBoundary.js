import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // LifeCycle HOOK method to catch an Error,
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        // whenever this gets triggered we will render the <h1> tag message
    }

    render() {
        if (this.state.hasError === true){
            return <h1> Oooops. That is not good. </h1>
        }
        return this.props.children
    }
}