import React, { Component } from 'react';

export default class PostsRow extends Component {
    render() {
        const post = this.props.post
      return (
          <tr>
              <td>{post.user}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
          </tr>
      );
    }
  }
