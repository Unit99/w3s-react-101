//class component and setState

import React from 'react'

class Car extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    // render(){
    //     return <h1>I'm a {this.props.color} car</h1>
    // }

    constructor(props){
        super(props)

        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'Red',
            year: 1954
        }
    }

    changeColor = ()=>{
        this.setState({color: 'Yellow'})
    }

    render(){
        return(
            <>
                <h1>I've a {this.state.brand} car</h1>
                <p>And it's a {this.state.color} {this.state.model} from the year {this.state.year}</p>
                <button type='button' onClick={this.changeColor}>Change color</button>
            </>
        )
    }
}

// class Garage extends Car{
//     // constructor(color, mod){
//     //     super(color)
//     //     this.brand = mod
//     // }

//     // render(){
//     //     return(
//     //         <h2>I'm a {this.props.color} {this.props.model} car</h2>
//     //     )
//     // }
// }

export default Car