let todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },
  toogleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // If all todos are completed, make all uncompleted
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Make all todos completed
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

let toggleAllBtn = document.getElementById("toggleAllBtn");
let addTodoBtn = document.getElementById("addTodoBtn");
let changeTodoBtn = document.getElementById("changeTodoBtn");
let deleteTodoBtn = document.getElementById("deleteTodoBtn");
let toggleCompletedBtn = document.getElementById("toggleCompletedBtn");

toggleAllBtn.addEventListener("click", function() {
  todoList.toogleAll();
  view.displayTodos();
});

addTodoBtn.addEventListener("click", function() {
  let addTodoInput = document.getElementById("addTodoInput");
  todoList.addTodo(addTodoInput.value);
  addTodoInput.value = "";
  view.displayTodos();
});

changeTodoBtn.addEventListener("click", function() {
  let changeTodoPosition = document.getElementById("changeTodoPosition");
  let changeTodoText = document.getElementById("changeTodoText");
  todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
  changeTodoPosition.valueAsNumber = "";
  changeTodoText.value = "";
  view.displayTodos();
});

deleteTodoBtn.addEventListener("click", function() {
  let deleteTodoPosition = document.getElementById("deleteTodoPosition");
  todoList.deleteTodo(deleteTodoPosition.value);
  deleteTodoPosition = "";
  view.displayTodos();
});

toggleCompletedBtn.addEventListener("click", function() {
  let toggleCompletedPosition = document.getElementById(
    "toggleCompletedPosition"
  );
  todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
  view.displayTodos();
});

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = '';
    for (let i = 0; i < todoList.todos.length; i++) {
      let todosLi = document.createElement("li");
      let todoText = '';
      if (todoList.todos[i].completed === true) {
        todosLi.textContent = '(X) ' + todoList.todos[i].todoText;
      } else {
        todosLi.textContent = '( ) ' + todoList.todos[i].todoText;
      }
      
      todosUl.appendChild(todosLi);
    }
  }
};
