import { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: {
      ...Object.fromEntries(
        new Array(4)
          .fill(null)
          .map((_v, i) => [
            i,
            <Counter
              key={Math.random()}
              id={i}
              handleDelete={this.handleDelete.bind(this)}
            />
          ])
      )
    }
  };

  handleDelete(id) {
    let countersObj = Object.assign({}, this.state.counters);
    delete countersObj[id];

    this.setState({
      ...this.state,
      counters: countersObj
    });
  }

  handleReset() {
    this.setState({
      ...this.state,
      counters: {
        ...Object.fromEntries(
          new Array(4)
            .fill(null)
            .map((_v, i) => [
              i,
              <Counter
                key={Math.random()}
                id={i}
                handleDelete={this.handleDelete.bind(this)}
              />
            ])
        )
      }
    });
  }

  handleAdd() {
    let countersObj = Object.assign({}, this.state.counters);
    let newID = Math.max(...Object.keys(countersObj).map((x) => +x)) + 1;
    if (newID === -Infinity) newID = 0;
    countersObj[newID] = (
      <Counter
        key={Math.random()}
        id={newID}
        handleDelete={this.handleDelete.bind(this)}
      />
    );

    this.setState({
      ...this.state,
      counters: countersObj
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div>
          <button
            className="btn btn-info"
            onClick={this.handleReset.bind(this)}
          >
            Reset
          </button>
          <button
            className="btn btn-success"
            onClick={this.handleAdd.bind(this)}
          >
            Add
          </button>
        </div>
        <br />
        <div>
          {Object.entries(this.state.counters)
            .sort((a, b) => a[0] - b[0])
            .map((x) => x[1])}
        </div>
      </div>
    );
  }
}
