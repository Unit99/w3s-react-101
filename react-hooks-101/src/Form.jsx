import {useState} from 'react'

function MyForm(){
    const [name, setName] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>Type your name:
            <input 
             type='text' 
             onChange ={(e) => setName(e.target.value)} />
            </label>
            <input type='submit' />
        </form>
    )
}

export default MyForm