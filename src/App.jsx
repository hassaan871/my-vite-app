import { useState } from 'react'
import './App.css'
import FunctionClick from './FunctionClick'
import Greet from './Greet'

const App = () => {
  const [heroName, setHeroName] = useState('AhamAham');
  return (
    <div>
      <Greet name="Bruce" heroName={heroName} />
      <FunctionClick heroName = {setHeroName}/>
    </div>
  )
}

export default App
