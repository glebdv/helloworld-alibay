import React, { Component } from 'react';
export class Child extends Component {
    render() {
      return (
        <div>
          CHILD {this.props.thing}
        </div>
      );
    }
  }
  