import { useContext } from "react"
import { ColorContext } from "../../context/ColorContext";

const ColorChanger = () => {
    const { selectedComponent, setSelectedComponent, setColor } = useContext(ColorContext);

    return (
        <div>
            <select onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
                <option value="parent">Parent</option>
                <option value="child">Child</option>
                <option value="grandchild">Grandchild</option>
            </select>

            <button onClick={() => setColor('yellowgreen')}>YelloGreen</button>
            <button onClick={() => setColor('skyblue')}>SkyBlue</button>
            <button onClick={() => setColor('orange')}>Orange</button>
        </div>
    )
}

export default ColorChanger;