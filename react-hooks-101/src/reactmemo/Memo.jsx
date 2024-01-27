import {useState} from 'react'
import Todos from './Todos'

const Memo = ()=>{
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(['todo 1', 'todo 2'])

    const increment = ()=>{
        setCount(c => c + 1)
    }

    const addTodo = ()=>{
        setTodos(previousState =>{
            return{...previousState, todos}
        })
    }

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick = {increment}>+</button>
                <button onClick = {addTodo}>Add tasks</button>
            </div>
        </>
    )
}

export default Memo

