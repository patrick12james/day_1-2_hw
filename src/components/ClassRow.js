import React, { Component } from 'react';

export default class ClassRow extends Component {
  render() {
      const mate = this.props.mate
    return (
        <tr>
            <td>{mate.first_name}</td>
            <td>{mate.id}</td>
            <td>{mate.last_name}</td>
        </tr>
    );
  }
}
