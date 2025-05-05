import { useContext } from "react";
import Child from "../Child/Child";
import { ColorContext } from "../../context/ColorContext";

const Parent = () => {
    const { selectedComponent, color } = useContext(ColorContext);

    return(
        <div style={{
            width: '400px',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: selectedComponent === 'parent' ? color : 'white'
        }}>
            <h2>Parent Component</h2>
            <Child />
        </div>
    )
}

export default Parent;