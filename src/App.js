import React, { Component } from "react";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import fakeMessages from "./fakeMessages";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#BDBDBD"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };

    this.sendNewMessage = this.sendNewMessage.bind(this);
  }

  getDatas(dataObject) {
    this.setState({ messages: dataObject });
  }

  sendNewMessage(newMessage) {
    fakeMessages.push({ id: new Date().getTime(), ...newMessage });
    this.setState({ messages: fakeMessages });
  }

  componentDidMount() {
    this.getDatas(fakeMessages);
    /* On appellera l'API si besoin avec son URL ensuite: 
    fetch('http://example.com/messages/')
    .then(res => res.json())
    .then((data) => {
       this.setState({ messages: data });
    });
    */
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header />
          <MessageList messages={this.state.messages} />
          <MessageForm sendNewMessage={this.sendNewMessage} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
