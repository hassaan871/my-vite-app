import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";

const Grandchild = () => {
    const { selectedComponent, color } = useContext(ColorContext);

    return(
        <div style={{
            width: '175px',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: selectedComponent === 'grandchild' ? color : 'white'
        }}>
            <h2>Grandchild Component</h2>
        </div>
    )
}

export default Grandchild;