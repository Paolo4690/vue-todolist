const app = new Vue({
    el: '#root',
    data: {
        newTodoObj: {
            text: '',
            done: false
        },
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
            if (this.newTodoObj.text != '') {
                this.todos.unshift({...this.newTodoObj})
                this.newTodoObj.text = ''
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