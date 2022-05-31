<template>
    <transition name="fade">
        <div
                class="chris-alert"
                v-show="visible"
                :class="[
                `alert-${ type }`
            ]">
            <div class="chris-alert-inner">
                <header>
                    <h1><slot name="header"></slot></h1>
                </header>
                <div class="content">
                    <p><slot name="content"></slot></p>
                    <chris-button
                            class="alert-btn"
                            :type="type"
                            @click="closeAlert">
                        <slot name="btnText"></slot>
                    </chris-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
const typeMap = [
    'primary',
    'success',
    'warning',
    'danger'
]

export default {
    name: 'ChrisAlert',
    props: {
        type: {
            type: String,
            default: 'primary',
            validate (value) {
                return typeMap.includes(value)
            }
        }
    },
    data () {
        return {
            visible: false
        }
    },
    methods: {
        openAlert () {
            this.visible = true
        },
        closeAlert () {
            this.$emit('confirm')
            this.visible = false
        }
    }
}
</script>

<style scoped lang="scss">
.chris-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);

    .chris-alert-inner {
        position: absolute;
        top: 50px;
        left: 50%;
        width: 400px;
        margin-left: -200px;
        border-radius: 5px;
        background-color: $--color-white;
        overflow: hidden;
        box-shadow: 1px 3px 5px $--color-shadow;

        h1,
        p {
            margin: 0;
            font-weight: normal;
            font-size: 16px;
        }

        header {
            height: 44px;
            padding: 0 15px;
            line-height: 44px;
            box-sizing: border-box;
            color: $--color-white;
        }

        .content {
            padding: 15px;
            box-sizing: border-box;

            .alert-btn {
                float: right;
                margin-bottom: 15px;
            }
        }
    }

    &.alert-primary {
        header {
            background-color: $--color-primary;
        }
    }

    &.alert-success {
        header {
            background-color: $--color-success;
        }
    }

    &.alert-warning {
        header {
            background-color: $--color-warning;
        }
    }

    &.alert-danger {
        header {
            background-color: $--color-danger;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
