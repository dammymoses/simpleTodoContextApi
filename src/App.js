import React, { Component } from 'react';
import { NameContext } from './context';

export default class App extends Component {
  static contextType = NameContext;
  render() {
    const { handleChange, name } = this.context;

    return (
      <>
        <div>Hello World {name}</div>
        <input name='name' onChange={handleChange} />
      </>
    );
  }
}
