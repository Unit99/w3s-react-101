import {memo} from 'react'

const Todos = ()=>{
    console.log("child render")

    const todos = []

    return(
        <>
            <h2>My todos</h2>
            {todos.map((todo, index) =>{
                return <p key={index}>{todo}</p>
            })}
        </>
    )
}

export default memo(Todos)