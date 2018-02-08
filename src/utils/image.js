import Mock from 'mockjs'

const Random = Mock.Random

// 获取图片，并随机生成图片的标题和描述
export default (imageArr) => {
    return imageArr.map((image, index) => {
        return {
            src: require(`../../public/images/0${image}`),
            title: Random.title(),
            desc: Random.paragraph()
        }
    })
}