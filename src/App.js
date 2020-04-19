import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Do the laundry',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Grab a beer',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Take walk with Mgx',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'FFVII Remake',
        completed: false
      },

      {
        id: uuidv4(),
        title: 'Doom Eternal',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Hang with Will and Taylor',
        completed: false
      }
    ]
  }

  // Toggle Todo Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <div className='todo-container'>
          <div className='todo-list'>
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
