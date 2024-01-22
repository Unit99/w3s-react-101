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

    const handleSubmit = (event)=>{
        event.preventDefault()
        alert(`The username entered was: ${inputs.username} Age entered as ${inputs.age} and the user was: ${inputs.sex} `)
        console.log(inputs)
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

            <label>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>

            <label>
                Enter your sex:
                <input type="radio" name="sex" value={male || ""} onChange={handleChange} />Male
                <input type="radio" name="sex" value={female || ""} onChange={handleChange} />Female
            </label>

            <input type="submit" />

        </form>
    )
}

export default MultipleFld