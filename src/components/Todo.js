import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleBlur = this.handleBlur.bind(this)

    this.state = {
      item: "",
      list: ["Item1", "Item2", "Item3"]
    }
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.item === "") {
      alert("Empty item not allowed")
    }
    else if (this.state.list.indexOf(this.state.item) < 0) {
      this.setState({
        list: this.state.list.concat(this.state.item),
        item: ""
      })
    }
    else {
      alert("Item is already in the list")
    }
  }
  // handleBlur() {
  //   this.setState({
  //     item: "" // clear the input field when it loses focus
  //   })
  // }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="item"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          // onBlur={this.handleBlur} // add the onBlur event
          />
          <button>Add</button>
        </form>

        <ul>
          {
            this.state.list.map((l, k) => {
              return <li key={k}>{l}</li>
            })
          }
        </ul>
        <button onClick={() => this.setState({ list: [] })}>Reset</button>
      </div>
    )
  }
}
