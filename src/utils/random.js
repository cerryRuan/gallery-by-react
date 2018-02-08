/**
 * 
 * @param {Int} low 随机数最小值，若只有 low 则为最大值，最小值为 0。
 * @param {Int} height 随机数最大值，若不传，则 low 为最大值。
 */
const random = (low, height) => {
    if (low !== undefined && height !== undefined) {
        return ~~(Math.random() * (height - low) + low)
    } else if (low !== undefined) {
        return ~~(Math.random() * low)
    } else {
        return Math.random()
    }
}

// 随机生成位置
const pos = (low, height) => random(low, height)

// 随机生成一个角度
const deg = () => ~~(Math.random() * 30 * (random() > 0.5 ? 1 : -1))

export default {
    pos,
    deg,
    random
}