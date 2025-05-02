import { forwardRef } from "react";

const ChildComponent = forwardRef(({placeholder}, ref) => {
    return(
        <div>
            <input type="text" ref={ref} placeholder={placeholder}/>
        </div>
    )
});

export default ChildComponent;