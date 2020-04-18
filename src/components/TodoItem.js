import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  // giving each item a line through and opacity based on todo.completed
  // this is a class method we define
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        textDecoration: 'line-through',
        opacity: '0.5'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }


  render() {
    const { id, title } = this.props.todo;
    return (
      // accessing the class method as inline styling
      <div className='todo-item' style={this.getStyle()}>
        <h5>{title}</h5>
        <button onClick={this.props.markComplete.bind(this, id)}>V</button>
        <button onClick={this.props.deleteTodo.bind(this, id)}>X</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
