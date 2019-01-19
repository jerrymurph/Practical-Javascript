let todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('There are no todos');
        } else {
            console.log('My Todos');
            for (let i = 0; i <this.todos.length; i++) {
                console.log(this.todos[i].todoText);

                if (this.todos[i].completed === true) {
                    console.log('(X)',this.todos[i].todoText);
                } else {
                    console.log('( )',this.todos[i].todoText);
                }
            }
        }    
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        this.todos[position].completed = !this.todos[position].completed
        this.displayTodos();
    },
    toogleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for (let i =0; i<totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            for (let i = 0; i <totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i <totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }

};