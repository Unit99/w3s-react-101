import {useState, useEffect} from 'react'

export default function CleanEffect(){
    const [count, setCount] = useState(0)

    useEffect( ()=>{
        let timer = setTimeout(()=>{
            setCount((c) => c + 1)
        }, 1000)

        return()=>{
            clearTimeout(timer)
            console.log('Effect cleared after' + timer + ' seconds')
        }
    }, [])

    return(
        <>
            <h2>I've rendered {count} times !</h2>
        </>
    )
}