import React, { Component } from 'react';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
    <div>
      <Header />
      {this.props.children} {/*any component nested within Route > Route end up as props.children */}
    </div>
    );
  }
}
