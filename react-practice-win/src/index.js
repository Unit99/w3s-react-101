import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Car from './Car';
import Garage from './Garage'
import Shoot from './Shoot'
import Goals from './Lunch'
import {Grocery} from './Lists'
import reportWebVitals from './reportWebVitals';
import Fruits from './Lunch';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const myElement = (
//   <>
//     <h1>Hi there !</h1>
//     <p>This is a test paragraph</p>
//   </>
// )



//function component inside another function component with different props
// function Job(props){
//   return <h1>I'm a {props.type} designer</h1>
// }

// function Work(props){
//   return (
//     <>
//       <h1>my name is {props.name}</h1>
//       <Job type="UI" />
//     </>
//   )
// }

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

//root.render(myJob)

//root.render(<Work name="Sanjib" />)

//root.render(<Car />)

const country = 'Belgium'

const lunchItem = true

const fruitItems = ['Mango', 'Orange', 'Apple']
const noFruits = []

const isGoal = true

root.render(
    <React.StrictMode>
        <Garage country = {country} />
        <Shoot />
        {/* <Lunch isLunch = {lunchItem}/> */}

        {/* <Fruits fruits = {fruitItems}/> */}
        <Goals isGoal = {isGoal} />

        <Grocery />
    </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
