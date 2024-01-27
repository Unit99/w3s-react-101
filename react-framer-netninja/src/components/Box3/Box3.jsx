//import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function Box3() {

//   const boxVariants = {
//     lion: {
//         x: 100,
//         scale: 1,
//         backgroundColor: 'blue'
//     },

//     elephant: {
//         x: 1000,
//         scale: .2,
//         backgroundColor: 'yellow'
//     }
//   }

  const box2Variants = {
    hidden: {
        x: "-100vw"
    },

    visible: {
        x: 0,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
        }
    }
  }

  const listVariants = {
    hidden: {
        x: -20,
        opacity: 0
    },

    visible: {
        x: 0,
        opacity: 1,
        staggerChildren: 10,
        transition: {
            type: 'spring',
            //stiffness: 80,
            //damp:5,
            ease: 'easeIn'
        }
    }
  }

  return (
    <div className='box-container'>
        {/* <motion.div 
            className = 'box'
            variants = {boxVariants}
            animate = "lion"
            initial = "elephant"
        >

        </motion.div> */}

        <motion.div 
            className='box'
            variants = {box2Variants}
            animate = "visible"
            initial = "hidden"
        >
            {[1,2,3].map(box =>{
                return <motion.li 
                        className='boxItem' 
                        variants={listVariants}
                    ></motion.li>
            })}                
        </motion.div> 
            
        
    </div>
  )
}
