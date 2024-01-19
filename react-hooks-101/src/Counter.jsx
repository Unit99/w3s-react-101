//variable dependency for useEffect hook

import {useState, useEffect} from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(()=>{
        setCalculation(()=>count * 2)
    }, [count])

    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick = {()=>setCount(c => c + 1)}>+</button>

            <p>Calculation: {calculation}</p>
        </>
    )
}

export default Counter