
import {motion, useAnimation} from "framer-motion"

export default function Box5() {
 
  const control = useAnimation()

  return (
    <div className="box-container">
        <button
        onClick = {()=>{
            control.start({
            x: 1500,
            transition: {duration: 2}
        })}}>Move right</button>
        <motion.div className="box" animate={control} />
    </div>
  )
}
