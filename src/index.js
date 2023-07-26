import Toastable from "./Toastable"
import ToastMessage from './components/ToastMessage.vue'
import { reactive } from 'vue'

const PLUGIN_LABEL = '[@sadrix/toastable-vue]'

const detectDisableLogger = (config) => {
    return config && typeof config == 'object' && config.hasOwnProperty('disableLogger') && config.disableLogger ? true : false 
}

const detectComponentName = (config) => {
    const def = 'ToastMessage'
    if (config && typeof config == 'object' && config.hasOwnProperty('componentName') && typeof config.componentName == 'string')
        return config.componentName
    else
        return def
}

export default {
    install(app, config) {
        try {
            const disableLogger = detectDisableLogger(config)
            const componentName = detectComponentName(config)

            let $SadrixToastable = reactive({
                active: false,
                color: 'success',
                text: '',
                timeout: 3000,
                timer: null,
                disableLogs: disableLogger,
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
            })

            app.config.globalProperties.$SadrixToastable = $SadrixToastable
            window.$SadrixToastable = $SadrixToastable

            // update plugin store state
            // toastStore.disableLogger = 
            // toastStore.className = 

            // set global classes accessable
            app.config.globalProperties.$Toastable = Toastable

            window.Toastable = Toastable       

            app.component(componentName, ToastMessage)

            if (!disableLogger)
                console.log(`${PLUGIN_LABEL}: Plugin installed successfully.`)

        } catch(e) {
            console.warn(`${PLUGIN_LABEL}: ${e.name} - ${e.message}`);
        }
        
    }
}