export class BrowserUtility {
    static save(key, value) {
        window.localStorage.setItem(key, value)
    }

    static get(key) {
        return window.localStorage.getItem(key)
    }

    static saveObj(key, obj) {
        window.localStorage.setItem(key, JSON.stringify(obj))
    }

    static getObj(key) {
        const temp = window.localStorage.getItem(key)
        if (temp) {
            return JSON.parse(temp)
        }
        return null
    }

    static remove(key) {
        window.localStorage.removeItem(key)
    }

    static removeAll() {
        window.localStorage.clear()
    }

    static scrollToTop() {
        const container = document.getElementById('right-container')
        if (container) {
            container.scrollTop(0)
        }
    }

    static downloadFile(url) {
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.target = '_blank'
        anchor.click()
    }
}
