import React, { Component } from 'react'

import {observer} from "mobx-react"
import store from '../store'

@observer
class imgFigure extends Component {

    // 处理图片点击事件
    handleClick(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        console.log('clicked: ', this.props.index)
        store.click(this.props.index)
    }
    
    render() {
        let styleObj = {}
        if (this.props.range.pos) {
            styleObj.left = this.props.range.pos.left
            styleObj.top = this.props.range.pos.top
        }
        if (this.props.range.rotate) {
            (['MosTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach(prefix => {
                styleObj[prefix] = `rotate(${this.props.range.rotate}deg)`
            })
        }

        if (this.props.range.isCenter) {
            styleObj['zIndex'] = 11
        }

        let className = ['img-figure', this.props.range.isInverse ? 'is-inverse' : ''].join(' ')

        return (
            <figure  className={className} style={styleObj}  onClick={this.handleClick.bind(this)}>
                <img src={this.props.data.src} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.index}{this.props.data.title}</h2>
                </figcaption>
                <section className="img-desc"  onClick={this.handleClick.bind(this)}>
                    {this.props.data.desc}
                </section>
            </figure>
        )
    }
}

export default imgFigure
