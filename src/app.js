import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Container from "./components/container";
import "./styles.css";

class App extends React.Component {
  state = {
    username: "herrherrmann",
    pushData: ""
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}/events`)
      .then(response => {
        let pushData = response.data.filter(data => data.type === "PushEvent");
        this.setState({
          pushData
        });
      });
  }
  render() {
    return <Container myCommits={this.state.pushData} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
