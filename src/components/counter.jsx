import { Component } from "react";

export default class Counter extends Component {
  state = {
    currentValue: 0
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <span>
              {this.state.currentValue ? this.state.currentValue : "Zero"}
            </span>
          </div>
          <button
            onClick={() =>
              this.setState({
                ...this.state,
                currentValue: this.state.currentValue + 1
              })
            }
          >
            Increase
          </button>
          <button
            onClick={() =>
              this.setState({
                ...this.state,
                currentValue: this.state.currentValue - 1
              })
            }
          >
            Decrease
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleDelete(this.props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
