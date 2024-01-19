import './App.css';

const x = 5
let text = 'Goodbye'

if(x < 10){
  text = 'Hello Sanjib'
}

function App() {
  return (
    <div className="App">
      <p>React is {5+5} times better than Javascript</p>
      {/* <p>{x < 10 ? 'Hello Sanjib' : 'Goodbye'}</p> */} {/* using ternary operator */}
      <p>{text}</p>  {/* using if statement */}
    </div>
  )
}

export default App;
