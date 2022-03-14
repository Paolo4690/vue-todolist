const app = new Vue({
    el: '#root',
    data: {
        strNewTodo:'',
        newTodoObj: {
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
            if (this.strNewTodo.trim() != '') {
                this.newTodoObj.text = this.strNewTodo.trim()
                this.todos.unshift(this.newTodoObj)
                this.newTodoObj = {
                    text: '',
                    done: false
                }
                this.strNewTodo = ''
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