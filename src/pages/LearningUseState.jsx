import { useState } from "react";

function LearningUseState() {
    //const[name, setName] = useState("Abhisek");
    //const[age, setAge] = useState(20);
    const[Counter, setCounter] = useState(0)

    //const returnData=useState("Abhisek")
    //const returnedData=returnData[0]
    //const returnedFunction=returnData[1]
    function increaseCounter() {
        setCounter(Counter+1);
    }
    function decreaseCounter() {
        setCounter(Counter-1);
    }
    return (
        <div>
            <h1>{Counter}</h1>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}
export default LearningUseState;