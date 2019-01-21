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
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },
  toogleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    // If all todos are completed, make all uncompleted
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
    view.displayTodos();
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
    todosUl.innerHTML = "";
  
    todoList.todos.forEach(function(todo, position) {
      let todosLi = document.createElement("li");
      let todoText = "";
      if (todo.completed === true) {
        todosLi.textContent = "(X) " + todo.todoText;
      } else {
        todosLi.textContent = "( ) " + todo.todoText;
      }

      todo.id = position;
      todoList.textContent = todosLi.textContent;
      todosLi.appendChild(view.createDeleteButton());
      todosUl.appendChild(todosLi);

    });
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event) {
      var elementClicked = event.target;

      if (elementClicked.className === "deleteButton") {
        todoList.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
