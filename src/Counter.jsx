import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0);
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }
    const handleRed=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return(
        <div>
            <h3>Number: {count}</h3>
            <button onClick={handleAdd}>
                Increase
            </button>
            <button onClick={handleRed}>
                Reduce
            </button>
        </div>
    )

}