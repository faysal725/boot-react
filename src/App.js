import React from 'react';
import './App.css';
import {Button, Card} from 'react-bootstrap';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import TopHeadline from './Components/TopHeadline/TopHeadline';

function App() {
  return (
    <div >
      <h2>Breaking News</h2>
      <Button variant="primary">Primary</Button>
      <Header></Header>

      <TopHeadline></TopHeadline>
      <News></News>
      
    </div>
  );
}

export default App;
