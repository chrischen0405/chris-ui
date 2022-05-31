import ChrisAlert from './chris-alert'
import ChrisButton from './chris-button'
import ChrisInput from './chris-input'

const componentMap = [
    ChrisAlert,
    ChrisButton,
    ChrisInput
]

let ChrisUI = {}

ChrisUI.install = function (Vue, options) {
    const { btnShadow } = options ? options : {}

    Vue.prototype.$btnShadow = !!btnShadow

    componentMap.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default ChrisUI
