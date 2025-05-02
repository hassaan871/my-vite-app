import { useEffect, useState } from 'react'
import './App.css'
import FunctionClick from './FunctionClick'
import Greet from './Greet'
import ConditionalRendering from './ConditionalRendering'
import ListRendering from './ListRendering'
import MyForm from './MyForm'

const App = () => {
  // const [heroName, setHeroName] = useState('AhamAham');
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  useEffect(()=>{
    setLoggedIn(false)
  },[]);

  return (
    <div>
      {/* <Greet name={name} /> */}
    
    
      {/*
      <FunctionClick heroName = {setHeroName}/> 
      <ConditionalRendering loggedIn={loggedIn} /> */}
      {/* <ListRendering /> */}
      <MyForm name={name} setName={setName}/>
    </div>
  )
}

export default App
