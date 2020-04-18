import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.todo.title}</h5>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
