//React props with variable as string and object
function Car(props){
    return <h2>This is my {props.model.brand} of {props.model.color} color.</h2>
}

function Garage(props){
    //const carName = 'Mustang'
    const carInfo = {brand: 'Ford', color: 'Orange'}
    
    return (
        <>
            <h1>There is a new guest in our {props.country} garage!</h1>
            {/* <Car model= {carName}/> */}
            <Car model= {carInfo}/>
        </>
    )
}

export default Garage