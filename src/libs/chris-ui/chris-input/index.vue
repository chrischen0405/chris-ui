<template>
    <div class="chris-input">
        <input class="chris-input-inner"
               v-bind="$attrs"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange"/>
    </div>
</template>

<script>
export default {
    name: 'ChrisInput',
    props: {},
    methods: {
        handleInput (e) {
            this.$emit('input', e.target.value)
        },
        handleFocus (e) {
            this.$emit('focus', e)
        },
        handleBlur (e) {
            this.$emit('blur', e)
        },
        handleChange (e) {
            this.$emit('change', e.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
.chris-input {
    position: relative;
    width: 180px;
    font-size: 14px;
    display: inline-block;

    .chris-input-inner {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        font-size: 14px;
        color: $--color-input-text;
        outline: none;
        border: 1px solid $--color-input-border;
        border-radius: 4px;
        box-sizing: border-box;
    }
}
</style>
