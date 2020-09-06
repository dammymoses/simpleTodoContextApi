import React, { Component } from 'react';

const NameContext = React.createContext();

class ContextProvider extends Component {
  sate = {};

  handleChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <NameContext.Provider
        value={{ handleChange: this.handleChange, name: 'Bola' }}
      >
        {this.props.children}
      </NameContext.Provider>
    );
  }
}
const newConsumer = NameContext.Consumer;
export { ContextProvider, newConsumer, NameContext };
