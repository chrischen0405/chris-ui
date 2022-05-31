import ChrisButton from './chris-button'

const componentMap = [
    ChrisButton
]

let ChrisUI = {}

ChrisUI.install = function (Vue, options) {
    const { btnShadow } = options ? options : {}

    console.log(Vue, options, btnShadow)

    Vue.prototype.$btnShadow = !!btnShadow

    componentMap.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default ChrisUI
