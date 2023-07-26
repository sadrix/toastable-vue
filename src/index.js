import Toastable from "./Toastable"
import ToastMessage from './components/ToastMessage.vue'
import { useToastStore } from './stores/toast'

const toastStore = useToastStore()

const PLUGIN_LABEL = '[@sadrix/toastable-vue]'

const detectDisableLogs = (config) => {
    return config && typeof config == 'boolean' && config.hasOwnProperty('disableLogs') && config.disableLogs ? true : false 
}

const detectMaxWidth = (config) => {
    const def = '1400px'
    if (config && typeof config == 'string' && config.hasOwnProperty('maxWidth') && typeof config.maxWidth == 'string')
        return config.maxWidth
    else
        return def
}

const detectComponentName = (config) => {
    const def = 'ToastMessage'
    if (config && typeof config == 'object' && config.hasOwnProperty('componentName') && typeof config.componentName == 'string')
        return config.componentName
    else
        return def
}

const detectClassName = (config) => {
    const def = 'toast-message'
    if (config && typeof config == 'object' && config.hasOwnProperty('className') && typeof config.componentName == 'string')
        return config.className
    else
        return def
}

export default {
    install(app, config) {
        try {
            const disableLogs = detectDisableLogs(config)

            const componentName = detectComponentName(config)

            const className = detectClassName(config)

            const maxWidth = detectMaxWidth(config)

            // update plugin store state
            toastStore.disableLogs = disableLogs
            toastStore.className = className
            toastStore.maxWidth = maxWidth

            // set global classes accessable
            app.config.globalProperties.$Toastable = Toastable

            window.Toastable = Toastable       

            app.component(componentName, ToastMessage)

            if (!disableLogs)
                console.log(`${PLUGIN_LABEL}: Plugin installed successfully.`)

        } catch(e) {
            console.warn(`${PLUGIN_LABEL}: ${e.name} - ${e.message}`);
        }
        
    }
}