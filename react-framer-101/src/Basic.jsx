import './App.css'
import {motion} from 'framer-motion'

const Basic = ()=>{
    return(
        <motion.div 
        className='basic' 
        initial = {{opacity: 0, scale: 0}}
        animate = {{opacity: 1, scale: 1.2}}
        transition = {{ease: 'easeInOut', duration: 2}}
        />
    )
}


export default Basic