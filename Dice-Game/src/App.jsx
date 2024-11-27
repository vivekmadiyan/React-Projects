import React from 'react'
import StartGame from './Components/StartGame';
import { useState } from 'react';
import GamePlay from './Components/GamePlay';


function App() {
  const [isGameStarted,setIsGameStarted]=useState(true);

  const toggleGamePlay= () =>{
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
  {isGameStarted ? <GamePlay /> : <StartGame 
  toggle={toggleGamePlay}
  />}
 
    </div>
  )
}

export default App
