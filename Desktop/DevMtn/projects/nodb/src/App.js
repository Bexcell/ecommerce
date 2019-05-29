import React from 'react';

import './App.css';
import Post from './Components/Post' 

function App() {
  return (
    <div className="LuxLife">
      <header>
        <img src="https://cdn.pixabay.com/photo/2017/01/26/14/51/alphabet-2010750_960_720.png" alt="lux" width="100"/>
        <h1>-Lux</h1>
      </header>
    <main>
   <Post />
   </main>
 <footer>
   <p>@2019 Brittani </p>
 </footer>
    </div>
  );
}

export default App;
