import React, { Component } from "react";

export class AnotherForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) =>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.component}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange.bind(this)}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="NextJs">NextJs</option>
            <option value="NodeJs">NodeJs</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default AnotherForm;
