import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Box1() {
 
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box-container'>
        <motion.div 
            className ='box'
            initial = {{
                x: 0,
                opacity: 0.1
            }}
            animate = {{
                x: isAnimating ? 1050 : 0,
                opacity: isAnimating ? 1 : 0.5,
                backgroundColor: isAnimating ? 'blue' : 'yellow',
                //scale: 1.5
                rotate: isAnimating ? 360 : 0 
            }}

            transition = {{
                type: 'spring',
                stiffness: 60,
                damping: 10
            }}

            onClick = {() => setIsAnimating (!isAnimating)}
        >

        </motion.div>
    </div>
  )
}
