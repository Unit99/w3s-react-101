import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Basic from './Basic';
import Refresh from './templates/Refresh';
import reportWebVitals from './reportWebVitals';

const AppWithUI = ()=>{
  const [count, setCount] = useState(0)

  const replayAnim = ()=>{
    return(
      setCount((e) => e +1)
    )
  }

  return(
    <>
      <Refresh onClick = {replayAnim} />
      {/* <App key = {count} /> */}
      {/* <Basic key = {count} /> */}

      
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithUI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
