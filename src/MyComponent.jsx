import { useEffect } from "react";
import { useState } from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component Unmounted");
        }
    },[count]);

    return(
        <div>
           <h1>{count}</h1>
           <button onClick={()=> setCount(count+1)}>Increment</button>
           <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default MyComponent;