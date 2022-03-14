const app = new Vue({
    el: '#root',
    data: {
        newTodo: {
            text: '',
            done: false
        },
        counterIndex: 0,
        todos: [
            {
                text: 'fare i compiti',
                done: false
            },
            {
                text: 'fare la spesa',
                done: true
            },
            {
                text: 'fare il bucato',
                done: false
            },
        ],
    },
    methods: {
        addNewTodo() {
            this.todos.push(this.newTodo)
            this.newTodo = {
                text: '',
                done: false
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        doneChange(index) {
            this.todos[index].done = !this.todos[index].done
        }
    }
})