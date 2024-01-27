//deprecated way
import React, {useEffect, useRef} from 'react'
import {gsap, Power3} from 'gsap'
import './Circle.css'

const Circle = ()=>{
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    useEffect(
        ()=>{
            gsap.from(circle, {opacity: 1, duration: .8,  x: 40, ease: Power3.easeOut})
            gsap.from(circleRed, {opacity: 1, duration: .8, x: 40, ease: Power3.easeOut, delay: .2})
            gsap.from(circleBlue, {opacity: 1, duration: .8, x: 40, ease: Power3.easeOut, delay: .4})
            console.log(circle, circleRed, circleBlue)
        }, []
    )


    return(
        <>
            <div className='circle-container'>
                <div ref = {el => circle = el} className='circle'></div>
                <div ref = {el => circleRed = el} className='circle red'></div>
                <div ref = {el => circleBlue = el} className='circle blue'></div>
            </div>
        </>
    )
}

export default Circle