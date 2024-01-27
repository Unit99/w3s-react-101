import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Refresh from './templates/Refresh';
import Basics from './Basics'
import reportWebVitals from './reportWebVitals'


const AppwithUI = ()=>{
  const [count, setCount] = useState(0)

  const replayAnim = ()=>{
    return(
      setCount((e) => e +1)
    )
  }

  return(
    <>
      <Refresh onClick = {replayAnim} />
      <Basics key = {count} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
      <AppwithUI />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
