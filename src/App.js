import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ClassList from './components/ClassList';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
        <h1>Hello</h1>
        <ClassList/>
        </div>
      </>
    );
  }
}
