import Masonry from 'masonry-layout';
import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import  Navbar  from './components/header/Navbar';
import Content  from './components/main/Main-content';



function App() {
{
    return (
    
      <div>
        <Navbar />
        <Content />
      </div>
      

  )
}}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)