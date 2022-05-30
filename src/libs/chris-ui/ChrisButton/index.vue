<template>
    <button
            @click="emitClick"
            :class="['chris-button', `btn-${ type }`]">
        <slot></slot>
    </button>
</template>

<script>
const typeMap = [
    'default',
    'primary',
    'success',
    'warning',
    'danger'
]

export default {
    name: 'ChrisButton',
    props: {
        type: {
            type: String,
            default: 'default',
            validate (value) {
                return typeMap.includes(value)
            }
        }
    },
    methods: {
        emitClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style scoped lang="scss">
.chris-button {
    height: 34px;
    padding: 0 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.btn-default {
        background-color: $--color-white;
        color: #333;
        border: 1px solid #ccc;
    }

    &.btn-primary {
        background-color: $--color-primary;
        color: $--color-white;
    }

    &.btn-success {
        background-color: $--color-success;
        color: $--color-white;
    }

    &.btn-warning {
        background-color: $--color-warning;
        color: $--color-white;
    }

    &.btn-danger {
        background-color: $--color-danger;
        color: $--color-white;
    }
}
</style>
