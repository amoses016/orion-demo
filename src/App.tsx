// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import JokeList from './components/JokeList/JokeList';
import { useEffect } from 'react';

function App() {
  return (
    <div className={"Container"}>
      <JokeList />
    </div>
  );
}

export default App;
