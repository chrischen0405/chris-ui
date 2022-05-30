import ChrisButton from './ChrisButton'

const componentMap = [
    ChrisButton
]

let ChrisUI = {}

ChrisUI.install = function (Vue) {
    componentMap.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default ChrisUI
