//React conditional rendering of components

//using if statement

// function Bread(){
//     return <h2>I'll have bread in my lunch</h2>
// }

// function Rice(){
//     return <h2>i'll have rice in my lunch</h2>
// }

// function Menu(props){
//     const isLunch = props.isLunch

//     if(isLunch){
//         return <Rice />
//     }

//     return <Bread />
// }

//export default Menu



//using logical && operator

// function Fruits(props){
//     const fruits = props.fruits

//     return(
//         <>
//             <h1>My fruit basket</h1>
//             {fruits.length > 0 && <h2>I've {fruits.length} fruits in my basket</h2>}
//         </>
//     )
// }

// export default Fruits



//using ternary operator
function MadeGoal(){
    return <h2>This is a goal!</h2>
}

function MissedGoal(){
    return <h2>Missed the goal!</h2>
}

function Goals(props){
    const isGoal = props.isGoal

    return isGoal ? <MadeGoal /> : <MissedGoal />
}

export default Goals