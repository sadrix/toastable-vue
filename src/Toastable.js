export default class Toastable {
    constructor({text, color, timeout = 3000, closeable = true, autoclose = true}) {
        this.text = text
        this.color = color
        this.closeable = closeable
        this.autoclose = autoclose
        this.timeout = timeout
        return this
    }

    setCloseable(value) {
        this.closeable = value
        return this
    }

    setAutoClose(value) {
        this.autoclose = value
        return this
    }

    setTimeout(value) {
        this.timeout = value
        return this
    }

    show() {
        $SadrixToastable.show(this)
    }

    hide() {
        $SadrixToastable.hide()
    }
}