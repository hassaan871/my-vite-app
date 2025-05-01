import { useEffect, useState } from 'react'
import './App.css'
import FunctionClick from './FunctionClick'
import Greet from './Greet'
import ConditionalRendering from './ConditionalRendering'

const App = () => {
  // const [heroName, setHeroName] = useState('AhamAham');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    setLoggedIn(false)
  },[]);

  return (
    <div>
      {/* <Greet name="Bruce" heroName={heroName} />
      <FunctionClick heroName = {setHeroName}/> */}
      <ConditionalRendering loggedIn={loggedIn} />
    </div>
  )
}

export default App
