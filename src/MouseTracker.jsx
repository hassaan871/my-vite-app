import { useState } from "react"

const Mouse = ({render}) => {
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    )
}

const MouseTracker = () => {
    return (
        <>
            <h1>Move the mouse around</h1>
            <Mouse render={({x, y})=><p>The current mouse position is ({x}, {y})</p>}/>
        </>
    )
}

export default MouseTracker;