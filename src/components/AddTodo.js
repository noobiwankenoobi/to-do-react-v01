import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          className="todo-input"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="add todo..."
        ></input>
        <button className="todo-button" type="submit" value="Submit">
          <i className="fa fa-plus-square"></i>
        </button>
      </form>
    )
  }
}

export default AddTodo
