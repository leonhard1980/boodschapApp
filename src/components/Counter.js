import React, {useState} from "react";

function Counter(){
    const [counter, setCounter] = useState(0)

    function decrementCounter() {
        if(counter ===0) {
            return;
        }
        setCounter(prevCount => prevCount - 1)
    }

    function incrementCounter() {
        setCounter(prevCount => prevCount + 1)
    }

    return(

        <>

            <p className="bestel">
                <button onClick={decrementCounter}> - </button>
                <span> {counter} </span>
                <button onClick={incrementCounter}> + </button>
            </p>

        </>

    );
}

export default Counter;