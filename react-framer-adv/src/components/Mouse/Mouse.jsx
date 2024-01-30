import "./Mouse.css"
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import AnimatedWords from "../Words/AnimatedWords"


const Mouse  = ()=>{
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })  
    
    const [cursorVariant, setCursorVariant] = useState("default")

    //console.log(mousePosition)

    useEffect(()=>{
        const mouseMove = (e)=>{
            //console.log(e)
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return ()=>{
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default:{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text:{
            width: 150,
            height: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "crimson",
            mixBlendMode: "difference"
        }
    }

    

    const textEnter = ()=> setCursorVariant("text")
    const textLeave = ()=> setCursorVariant("default")

    return(
        <>
            <h1 
                className="title"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
            >Hello World
            </h1>
            <motion.div 
                className="cursor" 
                variants={variants} 
                animate={cursorVariant}
            ></motion.div>

            <AnimatedWords text="how are you ?" />
            
        </>
    )
}

export default Mouse