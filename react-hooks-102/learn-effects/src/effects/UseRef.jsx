import {useRef} from 'react'

export function UseRef(){
    const inputElem = useRef()

    const focusInput = ()=>{
        inputElem.current.focus()
    }

    return(
        <>
            <input type='text' ref={inputElem} />
            <button onClick = {focusInput}>Focus Input</button>
        </>
    )

}