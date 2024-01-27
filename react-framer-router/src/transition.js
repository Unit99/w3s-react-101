import {motion, spring} from "framer-motion"

const transition = (OgComponent)=>{
    return()=> (
        <>
            <OgComponent />
            <motion.div 
                className="slide-in slides"
                initial = {{ scaleX: 0}}
                animate = {{scaleX: 0}}
                exit = {{scaleX: 1}}
                transition = {{
                    duration: 1, 
                    //ease: [0.22, 1, 0.36, 1]
                    ease: 'easeInOut'
                }}>
                    
                </motion.div>
            
            <motion.div 
                className="slide-out slides"
                initial = {{scaleX: 1}}
                animate = {{scaleX: 0}}
                exit = {{scaleX: 0}}
                transition = {{
                    duration: 1, 
                    //ease: [0.22, 1, 0.36, 1]
                    //type: spring,
                    //stiffness: 1800,
                    //mass: 5
                    ease: 'easeInOut'
                }}>
                    
                </motion.div>
            
        </>
    )
}


export default transition