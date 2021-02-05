import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    moives: [],
  };

  componentDidMount() {
    // data loading

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return <div>{isLoading ? "Loading..." : "Data is Ready"}</div>;
  }
}

export default App;
