import { defineStore } from 'pinia'

export const useToastStore = defineStore({
    id: 'toast',
    state: () => ({
        active: false,
        color: 'success',
        text: '',
        timeout: 3000,
        timer: null,
        disableLogs: false,
        className: 'toast-message',
        maxWidth: '1400px',
    }),
    actions: {
        show(toastable) {
            this.active  = true
            this.text    = toastable.text
            this.color    = toastable.color
            this.timeout = toastable.timeout

            // if timer is on clear it first
            if(this.timer) clearTimeout(this.timer)

            // set timer for auto hide
            this.timer = setTimeout(() => {
                this.hide()
            }, this.timeout)
        },
        hide() {
            this.active = false
            if(this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
        }
    }
})