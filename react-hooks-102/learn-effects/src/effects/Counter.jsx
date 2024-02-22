import {useState, useEffect} from 'react'
import CleanEffect from './CleanEffect'
import { UseRef } from './UseRef'
import { UseRef2 } from './UseRef2'

export default function Counter(){
    const [count, setCount] = useState(0)
    const [calc, setCalc] = useState(0)

    useEffect(()=>{
            setCalc(()=> count * 2)
    }, [count])

    return(
        <section className='container'>
            <h2>Counter: {count}</h2><br />
            <button type='button' onClick = {()=>setCount((c) => c + 1)}> + </button> <br />
            <p>Calculation: {calc}</p>
            <CleanEffect />
            <UseRef/>
            <UseRef2/>
        </section>
    )
}