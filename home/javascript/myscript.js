new Vue({
    el: '#guestbook-app',
    data() {
        return {
            newMessage: {
                name: '',
                message: ''
            },
            messages: []
        };
    },
    methods: {
        addMessage() {
            // Add the new message to the list
            this.messages.push({
                name: this.newMessage.name,
                message: this.newMessage.message
            });

            // Clear the input fields after submission
            this.newMessage.name = '';
            this.newMessage.message = '';
        }
    }
});
