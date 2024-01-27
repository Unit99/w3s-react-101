import {motion, useAnimation} from "framer-motion"

export default function Box5(){
    const control = useAnimation()

    return(
        <div className="box-container">
            <button 
            onClick = {
                ()=>{control.start({
                    x: 1500, 
                    transition: {duration: 2}}
                )}}>
                    Move right
                </button>
                <button 
                onClick = {
                ()=>{control.start({
                    x: 0, 
                    transition: {duration: 2}}
                )}}>
                    Move left
                </button>
                <button 
                onClick = {
                ()=>{control.stop()}}>
                   Stop
                </button>

            <motion.div className="box" animate={control} />
        </div>
    )
}

