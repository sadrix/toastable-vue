# <img src="./src/assets/sadrix-logo.svg" height="40" style="vertical-align:middle"> Sadrix Toastable Vue Component &nbsp;<img src="./src/assets/vue-js.svg" height="28" style="vertical-align:middle">

## About

Vue plugin to show single toast message in various colors with the ability to customize and manage events.

# Get Started

## Installation

Install latest version of Sadrix ```toastable-vue``` package with ```npm``` package manager:

``` js
npm i @sadrix/toastable-vue
```

## Dependencies

You only need to install ```Vue.js (version: ^3.0.0)``` to use this plugin.

``` js
npm i vue
```

## Add plugin to project

Simply import and add our vue plugin into the entry point of your project. Only check config you prefer to use and get start to use.


``` js
// --> main.js

import { createApp } from 'vue'
import SadrixToastable from '@sadrix/toastable-vue'
import App from 'app.vue'

const app = createApp(App)

// Add Toastable plugin to your Vue app
app.use(SadrixToastable, {
  // Customize component name. 
  // Default is : 'ToastMessage'
  componentName: 'Toaster', 

  // Disabled plugin logger
  // Default is -> false
  disableLogger: true, 
})

app.mount('#app')
```

## Add component to view

Simply add ```<ToastMessage />``` component (or what ever name you passed as config when add plugin to your app):

``` js
// --> App.vue

<template>
  <div>
    <h1>My Vue.js Application</h1>

    <!-- add component / custom component name -->
    <Toaster />

    <!-- add uicons / default component name -->
    <ToastMessage />
  <div>
</template>
```

## Create and Show Toastables

1. First you need to define one or multiple toasteables.
2. Use ```.show()``` method on toastable when needed.

``` html
// --> MyPage.vue
<template>
  <div>
    <h1>Sadrix Toastable App</h1>
    <button @click="showToast">Show my success Toastable</button>
  </div>
</template>

<!-- composeable api -->
<script setup>
const mySuccessToast = new Toastable({
  text: 'Hello world!', 
  color: 'success'
})

const showToast = () => {
  mySuccessToast.show()
}
</script>

<!-- option api -->
<script>
export default {
  data() {
    return {
      mySuccessToast = new Toastable({
        text: 'Hello world!', 
        color: 'success'
      })
    }
  },
  methods: {
    showToast() {
      this.mySuccessToast.show()
    }
  }
}

const 
</script>
```

# Changelog

## 1.0.0

New awesome plugin for all Vue lovers 🎉