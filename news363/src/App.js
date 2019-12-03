import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopStories from './TopStories';
import TopTechStories from './TopTechStories';
import TopNYT from './TopNYT';
import TopESPN from './TopESPN';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">News363</a>
<div class = "row">
        <a className="nav-link disabled" href="#">Top News</a>
        <a className="nav-link disabled" href="#">Technology</a>
        <a className="nav-link disabled" href="#">Source: NY Times</a>
        <a className="nav-link disabled" href="#">Source: ESPN</a>
</div>
      </nav>
      <h1 class = "text-center pt-5 pb-2">Top Stories</h1>
      <div className="container">
        <div className="container">
          <div class = "row">
          <TopStories/>
          </div>        
        </div>
        <hr/>
        <h1 class = "text-center pt-5 pb-2">Top Tech Stories</h1>
        <div className="row">
          <TopTechStories />
        </div>
        <hr/>
        <div className="row">
          <div class ="col"><TopNYT /></div>
          <div class ="col"><TopESPN /></div>
        </div>
    </div>
    </div>
    
    
  );

}



export default App;
