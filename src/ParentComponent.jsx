import { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return(
        <div>
            <ChildComponent ref={inputRef} placeholder="Type here..."/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default ParentComponent;