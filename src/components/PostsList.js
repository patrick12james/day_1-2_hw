import React, { Component } from 'react';
import PostsRow from './PostsRow';

export default class PostsList extends Component {
  constructor(props) {
    console.log('Component Constructed')
    super(props);
    this.state = {
       posts: []
    }
}


componentDidMount(){
    console.log('Component Did Mount')
    fetch('https://kekambas-bs.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            posts: data
        })
    })
}

    render() {
        console.log('Component Rendered')
    return (
        <>
            <h1>This is the class posts</h1>
            <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th scope="col">User</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {this.state.posts.map((m, i) => <PostsRow posts={m} key={i} />)}
            </tbody>

            </table>
        </>
    );
  }
}
