import { useContext } from "react";
import Grandchild from "../Grandchild/Grandchild";
import { ColorContext } from "../../context/ColorContext";

const Child = () => {
    const { selectedComponent, color } = useContext(ColorContext);

    return (
        <div style={{
            width: '270px',
            height: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: selectedComponent === 'child' ? color : 'white'
        }}>
            <h2>Child Component</h2>
            <Grandchild />
        </div>
    )
}

export default Child;