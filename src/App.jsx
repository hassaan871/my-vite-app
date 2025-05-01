import { useEffect, useState } from 'react'
import './App.css'
import FunctionClick from './FunctionClick'
import Greet from './Greet'
import ConditionalRendering from './ConditionalRendering'
import ListRendering from './ListRendering'

const App = () => {
  // const [heroName, setHeroName] = useState('AhamAham');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    setLoggedIn(false)
  },[]);

  return (
    <div>
      {/* <Greet name="Bruce" heroName={heroName} />
      <FunctionClick heroName = {setHeroName}/> 
      <ConditionalRendering loggedIn={loggedIn} /> */}
      <ListRendering />
    </div>
  )
}

export default App
