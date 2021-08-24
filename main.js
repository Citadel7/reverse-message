// JavaScript

const eventHandling = {
    data() {
        return {
            message: 'Software Engineering'
        }
    },
    methods: {
        reverseMessage() {
            return this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}

Vue.createApp(eventHandling).mount('#root')
