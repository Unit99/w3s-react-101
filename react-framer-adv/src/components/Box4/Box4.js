import {motion} from "framer-motion"

export default function Box4() {
    const boxVariant = {
        hide: {
            opacity: 0,
            x: -200
        },
        show:{
            opacity: 1,
            x: 0,
            transition: {
                delay: 2,
                when: "beforeChildren"
            }
        }
    }

    const listVariant = {
        hide: {
            opacity: 0,
            x: -20
        },
        show:{
            opacity: 1,
            x: 0,
            duration: 4,
            staggerChildren: 2
        }
    }

    return (
        <div className="box-container">
            <motion.div variants={boxVariant} initial="hide" animate="show" className="box orange large">
                {[1,2,3].map(item=>{return <motion.li variants={listVariant}className="boxItem"></motion.li>})}
            </motion.div>
        </div>
    )
}
