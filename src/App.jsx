import React from 'react'
import Picture from "./assets/img/image.png";
import Navbar from './components/Navbar';
import { Card1 } from './components/Card';


const App = () => {
  return (
    <div>
      <Navbar/>
      <h1>hello</h1>
      <Card1/>
      <img src={Picture} alt="" />
    </div>
  )
}

export default App