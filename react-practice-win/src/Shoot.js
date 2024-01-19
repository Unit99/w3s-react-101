//React events
function Shoot(){
    // const goal = (a) =>{
    //     alert(a)
    // }

    // return <button type='button' onClick = {()=> goal('Shoot the balloon!')}>Shoot now!</button>

    const goal = (a,b) => {
        alert(b.type)
    }

    return(
        <button type='button' onClick={(event) => goal('Shoot the balloon!', event)}>Take the shot!</button>
    )
}

export default Shoot

