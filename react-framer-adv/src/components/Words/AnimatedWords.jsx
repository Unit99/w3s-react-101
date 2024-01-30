import {motion} from "framer-motion"


const AnimatedWords = ({text}) =>{
  const words = text.split(" ")
  console.log(words)

  const subHeader = {
    hidden: {
        opacity: 0, 
    },
    visible: (i = 0)=> ({
        opacity: 1,
        transition: {staggerChildren: 0.12, delayChildren: 0.04 + i}
    }),
  }

  const child = {
    visible: {
        opacity: 1,
        y: 50,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    },
    hidden: {
        opacity: 0,        
        y: -50,
        transition:{
            type: 'spring',
            stiffness: 100,
            damping: 12
        }
    }
  }

 return(
    <motion.h2 
    className="sub-header" 
    variants={subHeader} 
    initial="hidden" 
    animate="visible"
    >
        {words.map((word, index)=>(
            <motion.span 
                style={{marginRight: "5px"}} 
                key={index}
                variants={child}
            >{word}
            </motion.span>
        ))}
    </motion.h2>
 )
}

export default AnimatedWords