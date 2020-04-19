import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the laundry',
        completed: false
      },
      {
        id: 2,
        title: 'Grab a beer',
        completed: false
      },
      {
        id: 3,
        title: 'Take walk with Bibi',
        completed: false
      },
      {
        id: 4,
        title: 'FFVII Remake',
        completed: false
      },

      {
        id: 5,
        title: 'Doom Eternal',
        completed: false
      },
      {
        id: 6,
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

  render() {
    return (
      <div className="App">
        <Header />
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
