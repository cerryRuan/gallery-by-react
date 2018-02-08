import React, {Component} from 'react'
import DOM from 'react-dom'
// import MobxDev from 'mobx-react-devtools'

import Image from './components/figure'
import ControllerUnit from './components/controller'

import GenerateImage from './utils/image'
import GenerateConstant from './utils/constant'
// import Random from './utils/random'

import store from './store'

const ImageArray = GenerateImage([1,2,3,4,5,6,1,2,3,4,5,6].map(number => `${number}.jpg`))
console.log(ImageArray)
var CONSTANTS = {
    center: {
        left: 0,
        top: 0
    },
    top: {
        x: [0, 0],
        y: [0, 0]
    },
    aside: {
        leftX: [0, 0],
        rightX: [0, 0],
        y: [0, 0]
    }
}

class App extends Component {
    /**
     * 初始化函数，在这里就开始初始化每一张图片的初始位置和信息。
     */
    constructor(props) {
        super(props)
        ImageArray.map(() => {
            store.addNewFigure()
        })
    }

    /**
     * 当组件完成挂载后，将初始化 CONSTANTS 常量变量组。
     */
    componentDidMount() {
        console.log('componentDidMount')
        let stage = DOM.findDOMNode(this.refs.stage),
            image = DOM.findDOMNode(this.refs.image0)
        console.log(stage.scrollWidth, stage.scrollHeight, image.offsetWidth, image.offsetHeight)
        // let _self = this
        // 此处要等第一张图片完全加载完成后才能拿到每个 figure 的真正高度，再初始化。
        image.querySelector('img').onload = function() {
            console.log(stage.scrollWidth, stage.scrollHeight, image.offsetWidth, image.offsetHeight)
            CONSTANTS = GenerateConstant(stage.scrollWidth, stage.scrollHeight, image.offsetWidth, image.offsetHeight)
            // _self.resetImagePosition(0)
            store.CONSTANTS = CONSTANTS
            store.resetFigures(0)
            console.log(CONSTANTS)
        }
    }

    // 渲染函数
    render() {

        const images = ImageArray.map((image, index) => {

            return <Image 
                data={image} 
                key={index} 
                index={index} 
                range={store.figures[index]} 
                ref={'image' + index} />
        })

        const controllers = ImageArray.map((image, index) => {
            return <ControllerUnit
                key={index}
                range={store.figures[index]} />
        })

        return (
            <div className="stage" ref="stage">
                <section className="img-sec">
                    {images}
                </section>
                <nav className="controller-sec">
                    {controllers}
                </nav>
            </div>
        )
    }
}


export default App