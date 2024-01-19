//useState hook
import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Uber');
  return (
    <>
      <h2>My name is {name}</h2>
      <button type='button' onClick={() => setName('Swiggy')}>Change brand</button>
    </> 
  );
}

export default App;
