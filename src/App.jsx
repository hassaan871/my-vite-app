import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>React Portals Example</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <Modal>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}>
          <h2
            style={{
              padding: "8px 16px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >Modal Window</h2>
          <button onClick={()=> setShowModal(false)}>Close</button>
        </div>
      </Modal>}
    </div>
  )
}

export default App;