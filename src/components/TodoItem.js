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
        <h3>{title}</h3>
        <button className='completed-btn' onClick={this.props.markComplete.bind(this, id)}><i className='fa fa-check btn-icon'></i></button>
        <button className='trash-btn' onClick={this.props.deleteTodo.bind(this, id)}><i className="fa fa-trash btn-icon"></i></button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
