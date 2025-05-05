import Parent from "./components/Parent/Parent";
import ColorProvider from "./context/ColorContext";


const App = () => {
  return (
    <ColorProvider>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1>Global State Management with Context API</h1>
        <Parent />
      </div>
    </ColorProvider>
  )
}

export default App;