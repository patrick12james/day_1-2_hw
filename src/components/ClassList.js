import React, { Component } from 'react';
import ClassRow from './ClassRow';

export default class ClassList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state = {
            mates: []
        }
    }

    componentDidMount(){
        console.log('Component Did Mount')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                mates: data
            })
        })
    }

  render() {
      console.log('Component Rendered')
    return (
        <>
            <h1>This is the class list</h1>
            <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.mates.map((m, i) => <ClassRow mate={m} key={i} />)}
            </tbody>

            </table>
        </>
    );
  }
}
