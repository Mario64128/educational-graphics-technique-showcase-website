import { useState } from 'react'
import './App.css'

export function makeGuess(guess : boolean) : number {
  if (guess) return Math.random()*100;

  return 0;
}

function App() {

  return (
      <>
      <h1 style={{alignContent : "center"}}> Educational Graphics Website </h1>
        <img src="../BlueEyesCat.webp"></img>

      </>
  )
}

export default App
