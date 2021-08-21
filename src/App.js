import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({ type: "INCREASE_COUNT" });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>Click</button>
        <p>{this.props.store.getState().clicks}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     clicks: state.clicks,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCount: () => dispatch({ type: "INCREASE_COUNT" }),
//   };
// };

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
