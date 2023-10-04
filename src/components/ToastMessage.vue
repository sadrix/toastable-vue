<template>
    <transition name="toast-slide-down" mode="in-out">
        <div v-show="toastStore.active" :class="classes" @click="hide">
            <div class="toast-container">
                <div class="text">
                    {{ toastStore.text }}
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { computed  } from 'vue'

const toastStore = $SadrixToastable

const classes = computed(() => {
    let classes = ['toast-message']
    classes.push(toastStore.color)
    return classes
})

const hide = () => {
    toastStore.hide()
}

</script>

<style lang="scss" scoped>
.toast-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 24px 0 0;
    z-index: 20000;
    cursor: pointer;
    transition: 0.5s ease;
    height: max-content;

    @media screen and (max-width: 992px) {
        padding: 16px 0 0;
    }

    .toast-container {
        position: relative;
        border-radius: 8px;
        padding: 16px;
        backdrop-filter: blur(5px);
        width: calc(100% - 32px);
        max-width: 1400px;
        margin-right: auto;
        margin-left: auto;

        @media screen and (max-width: 1480px) {
            max-width: 1200px;
        }
        .text {
            position: relative;
            width: 100%;
            max-width: 600px;
            text-align: center;
            line-height: 32px;
            font-size: 16px;
            justify-self: center;
            margin-right: auto;
            margin-left: auto;
            color: white;

            @media (max-width: 992px) {
                font-size: 14px;
                line-height: 28px;
            }
        }
    }
    
    &.blue .toast-container ,
    &.info .toast-container {
        border: 1px solid #2196F3;
        background-color: rgba(#2196F3, 0.8);
    }

    &.red .toast-container,
    &.danger .toast-container {
        border: 1px solid #CE3756;
        background-color: rgba(#CE3756, 0.8);
    }

    &.green .toast-container,
    &.success .toast-container {
        border: 1px solid #2AB579;
        background-color: rgba(#2AB579, 0.8);
    }

    &.yellow .toast-container,
    &.warning .toast-container {
        border: 1px solid #F9C06C;
        background-color: rgba(#F9C06C, 0.8);

        .text {
            color: #1f1f1f;
        }
    }

    &.purple .toast-container,
    &.action .toast-container {
        border: 1px solid #BB58EB;
        background-color: rgba(#BB58EB, 0.8);
    }
}

.toast-slide-down-enter-active,
.toast-slide-down-leave-active{
    transition: 0.4s cubic-bezier(.52,.29,.59,1.22);
}

.toast-slide-down-enter-from,
.toast-slide-down-leave-to {
    transform: translateY(-100%);
}
</style>