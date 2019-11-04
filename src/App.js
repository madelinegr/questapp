import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './map.js'
import Compass from './compass.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Calling All Adventurers!</h2>
        <img src="https://www.anquotes.com/wp-content/uploads/2018/09/explore-quotes-anquotes-696x406.jpg" className="App-logo" alt="logo" />
        <p class="quote">“Don’t listen to what they say. Go see.”</p>
        <p class="quote">”Adventure may hurt you but monotony will kill you.”</p>
        <p class="quote">“Go, fly, roam, travel, voyage, explore, journey, discover, adventure.”</p>
        <p class="quote">“The most beautiful in the world is, of course, the world itself.”</p>
        <p class="quote">“Life is either a daring adventure or nothing at all.”</p>
        <p class="quote">“Dare to live the life you’ve always wanted.”</p>
        <p class="quote">“Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.”</p>
        <p class="quote">“Oh the places you’ll go.”</p>

        <Compass />

        <SimpleMap />
      
      </header>
    </div>
  );
}

export default App;
