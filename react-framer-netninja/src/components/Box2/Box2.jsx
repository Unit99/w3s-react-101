import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Box2() {

  return (
    <div className='box-container'>
        <motion.div 
            className ='box'
            
            whileHover={{
                scale: 1.1
            }}

            whileTap={{
                scale: 0.9
            }}

            drag
            dragConstraints = {{
                right: 20,
                left: -20,
                bottom: 5
            }}
        >

        </motion.div>
    </div>
  )
}
