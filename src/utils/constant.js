/**
 * 生成图片位置范围函数
 * 传入参数依次为 舞台宽，舞台高，图片宽
 */
export default (stageWidth, stageHeight, imgWidth, imgHeight) => {
    // 保存舞台一半的宽高，和图片的一半宽高
    let stageHalfWidth = stageWidth / 2,
        stageHalfHeight = stageHeight / 2,
        imgHalfWidth = imgWidth / 2,
        imgHalfHeight = imgHeight / 2
    // 上方图片放置范围
    let top = {
        x: [
            stageHalfWidth - imgHalfWidth,
            stageHalfWidth + imgHalfWidth
        ],
        y: [
            0 - imgHalfHeight,
            stageHalfHeight - imgHeight
        ]
    },
    // 居中图片的位置
    center = {
        left: stageHalfWidth - imgHalfWidth,
        top: stageHalfHeight - imgHalfHeight
    },
    // 两边图片的放置范围
    aside = {
        leftX: [
            0 - imgHalfWidth,
            stageHalfWidth - imgHalfWidth * 3
        ],
        rightX: [
            stageHalfWidth + imgHalfWidth * 2,
            stageWidth - imgHalfWidth
        ],
        y: [
            0 - imgHalfHeight,
            stageHeight - imgHalfHeight
        ]
    }
    return {
        top,
        center,
        aside
    }
}