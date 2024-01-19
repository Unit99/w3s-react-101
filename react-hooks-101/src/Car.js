import {useState} from 'react'

function Car(){
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: '1984',
        color: 'red'
    })

    const updateYear = ()=>{
        setCar(previousState =>{
            return{...previousState, year: '1986'}
        })
    }

    return (
        <>
            <h1>What's in my garage!</h1>
            <p>
                A {car.brand} {car.model} from the year {car.year} of color {car.color}
            </p>
            <button type='button' onClick={updateYear}>Update info</button>
        </>
    )
}

export default Car