import {observable, computed} from 'mobx';
import axios from 'axios';

export default class TodoStore {
  constructor() {
    this.getInitialTodos();
  }

  @observable todos = [];

  getInitialTodos() {
    axios
      .get('http://15db600d.ngrok.io/api/v1/todos')
      .then((response) => {
        this.todos = response.data;
        console.log('todosIn ========>', response.data);
      })
      .catch((error) => console.log('Fetch Error==> ', error));
  }

  addTodo = (title) => {
    this.todos.unshift(new TodoModel(title));
    return this.todos;
  };

  markTodo = (id) => {
    const todo = this.todos.find((todo) => todo.id === id);

    todo.done = !todo.done;

    if (todo.done) {
      this.todos.push(this.todos.splice(this.todos.indexOf(todo), 1)[0]);
    } else {
      this.todos.unshift(this.todos.splice(this.todos.indexOf(todo), 1)[0]);
    }
    return;
  };

  deleteTodo = (id) => {
    const todo = this.todos.find((todo) => todo.id === id);
    const deleted = this.todos.splice(this.todos.indexOf(todo), 1);
    return deleted;
  };
}

class TodoModel {
  id = Date.now();
  @observable title;
  @observable done = false;
  constructor(title, done) {
    this.title = title;
    this.done = done;
  }
}
