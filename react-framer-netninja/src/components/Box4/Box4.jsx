import React from 'react'
import {motion} from 'framer-motion'

export default function Box4() {
 
  

  return (
    <div className='box-container'>
        <motion.div 
            className ='box'
            animate = {{
                scale: [1, 1.4, 1.4, 2, 1.4, 1],
                rotate: [0, 270, 270, 360, 0],
                borderRadius: ['0px', '6px', '12px', '12px', '6px', '0px']
            }}

            transition = {{
                duration: 4,
               // repeat: Infinity
            }}
        >

        </motion.div>
    </div>
  )
}
