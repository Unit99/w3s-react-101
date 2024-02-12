import {motion} from 'framer-motion'

export default function transition(OgComponent){
    return() =>(
        <>
            <OgComponent />
            
            <motion.div
            className = 'slide-down slides'
            initial = {{scaleY: 0}}
            animate = {{scaleY:0}}
            exit = {{scaleY: 1}}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                type: 'spring'
            }}
            ></motion.div>
            <motion.div
            className = 'slide-up slides'
            initial = {{scaleY: 1}}
            animate = {{scaleY: 0}}
            exit = {{scaleY: 0}}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                type: 'spring'
            }}
            ></motion.div>
        </>
    )
}
