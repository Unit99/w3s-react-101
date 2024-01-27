//how to handle multiple input fields using react form controls
import { useState } from "react";

function MultipleFld(){

    const [inputs, setInputs] = useState({})

    const male = "Male"
    const female = "Female"

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values, [name]: value}))
    }

    const[textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    )

    const [select, setSelect] = useState("Angular")

    const handleTextarea = (e)=>{
        setTextarea(e.target.value)
    }

    const handleSelect = (e) =>{
        setSelect(e.target.value)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`The username entered was: ${inputs.username} Age entered as ${inputs.age} and the user was: ${inputs.sex}.The user bio is: ${textarea} and the selected subject was: ${select}`)
        console.log(inputs)
        console.log(textarea)
        console.log(select)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <br /> 
            <label>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Enter your sex:
                <input type="radio" name="sex" value={male || ""} onChange={handleChange} />Male
                <input type="radio" name="sex" value={female || ""} onChange={handleChange} />Female
            </label>
            <br />
            <label>
                User bio:
                <textarea value={textarea} onChange={handleTextarea}></textarea>
            </label>

            <br />
            <label>
                Select your subject:
                <select value={select} onChange={handleSelect}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Svelte">Svelte</option>
                </select>
            </label>


            <input type="submit" />

        </form>
    )
}

export default MultipleFld