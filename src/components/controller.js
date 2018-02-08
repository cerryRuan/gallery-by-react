import React, { Component } from 'react';

class Controller extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (this.props.range.isCenter) {
            this.props.inverse()
        } else {
            this.props.center()
        }
        e.preventDefault()
        e.stopPropagation()
        // console.log('You have clicked the controller.')
    }

    render() {
        let className = ['controller-unit', 'iconfont']
        if (this.props.range.isCenter) {
            className.push('is-center')
            if (this.props.range.isInverse) {
                className.push('is-inverse')
            }
        }
        className = className.join(' ')
        return <span className={className} onClick={this.handleClick}></span>
    }
}

export default Controller