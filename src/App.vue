<template>
    <div id="app">
        <div class="btn-list">
            <chris-button @click="onClick('Default')">
                Default
            </chris-button>
            <chris-button type="primary" @click="onClick('Primary')">
                Primary
            </chris-button>
            <chris-button type="success" @click="onClick('Success')">
                Success
            </chris-button>
            <chris-button type="warning" @click="onClick('Warning')">
                Warning
            </chris-button>
            <chris-button type="danger" @click="onClick('Danger')">
                Danger
            </chris-button>
        </div>
        <chris-button @click="openAlert">OPEN ALERT</chris-button>
        <chris-alert
                ref="chrisAlert"
                type="primary"
                @confirm="confirmAlert">
            <template #header>
                This is header
            </template>
            <template #content>
                This is content
            </template>
            <template #btnText>
                Confirm
            </template>
        </chris-alert>
    </div>
</template>

<script>

export default {
    name: 'App',
    methods: {
        onClick (type) {
            console.log('click!', type)
        },
        openAlert () {
            this.$refs.chrisAlert.openAlert()
        },
        confirmAlert () {
            console.log('confirm alert')
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.btn-list {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    .chris-button {
        margin: 0 15px;
    }
}
</style>
