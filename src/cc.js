import react, { Component } from "react";

class CC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // changeCountAdd = () => {

  // this.setState({ count: this.state.count + 1 });

  // };

  // changeCountMinus = () => {

  //         this.setState({ count: this.state.count - 1});

  // };
  changeCountAdd = () => {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  changeCountMinus = () => {
    setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h3>COUNT = {this.state.count}</h3>
        <button onClick={this.changeCountAdd}>+</button>
        &nbsp;&nbsp;
        <button onClick={this.changeCountMinus}>-</button>
      </div>
    );
  }
}
export default CC;
// this is my commit
