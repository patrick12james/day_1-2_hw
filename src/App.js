import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ClassList from './components/ClassList';
import { Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
      <Routes>
        <Route path="/" element={<ClassList />}/>
        <Route path="posts" element={<PostsList />} />
      </Routes>

      </>
    );
  }
}
