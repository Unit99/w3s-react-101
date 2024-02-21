import {useState} from 'react'

export default function UseStateUsage(){
    const [car, setCar] = useState({
        brand: 'Ford',
        model: 'Mustang',
        year: 1986,
        color: 'blue'
    })

    

    const updateColor = ()=>{
        setCar(previouState =>{
            return{...previouState, color: 'red', year: 1989}
        })

        document.querySelector('.desc').setAttribute('style','color: red')
    }

    return(
        <section className='container'>
            <h2>What's in my garage</h2>
            <p className='desc'>
                A {car.brand} {car.model} from the year {car.year} of color {car.color}
            </p>
            <button type='button' onClick = {updateColor}>Update info</button>
        </section>
    )
}