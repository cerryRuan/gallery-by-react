import { observable } from 'mobx'
import Random from '../utils/random'

export class Figure {
    @observable pos
    @observable rotate
    @observable isInverse
    @observable isCenter

    constructor() {
        this.pos = {
            top: 0,
            left: 0
        }
        this.rotate = 0
        this.isInverse = false
        this.isCenter = false
    }
}

export class FigureSotre {
    @observable figures = []
    CONSTANTS = {}
    
    addNewFigure() {
        this.figures.push(new Figure())
    }

    resetFigures(centerIndex) {
        const figures = this.figures
        let topImageNum = Random.random(2),
            topIndex = Random.random(figures.length - 1)
        let leftNum = 0,
            rightNum = 0
        let positionY = this.CONSTANTS.aside.y
        for (let index = 0, len = figures.length; index < len; index++) {
            const figure = figures[index]
            figure.isInverse = false
            figure.isCenter = false
            // console.log('processing:', index)
            if (index === centerIndex) {
                console.log('index: ', index, ' center.')
                figure.pos = this.CONSTANTS.center
                figure.isCenter = true
                
                figure.rotate = 0
            } else if (index === topIndex && topImageNum > 0) {
                figure.pos = {
                    top: Random.pos(this.CONSTANTS.top.y[0], this.CONSTANTS.top.y[1]),
                    left: Random.pos(this.CONSTANTS.top.x[0], this.CONSTANTS.top.x[1])
                }
                console.log('index: ', index, ' top.')
                figure.rotate = Random.deg()
            } else {
                let positionX = leftNum <= rightNum ? this.CONSTANTS.aside.leftX : this.CONSTANTS.aside.rightX            
                figure.pos = {
                    top: Random.pos(positionY[0], positionY[1]),
                    left: Random.pos(positionX[0], positionX[1])
                }
                figure.rotate = Random.deg()
                console.log('index: ', index, ' ', leftNum <= rightNum ? 'left' : 'right', '.')
                leftNum <= rightNum ? leftNum ++ : rightNum ++
            }
        }
        console.log(this.figures[centerIndex].isCenter)
        // console.log(this.CONSTANTS)
    }

    center(index) {
        this.resetFigures(index)
    }

    click(index) {
        // console.log(this)
        if (this.figures[index].isCenter) {
            this.inverse(index)
        } else {
            this.center(index)
        }
    }

    inverse(index) {
        this.figures[index].isInverse = !this.figures[index].isInverse
    }
}

const store = new FigureSotre()

export default store
window.store = store