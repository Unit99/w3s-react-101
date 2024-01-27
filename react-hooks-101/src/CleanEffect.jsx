//effects such as timeouts, subscriptions, event listeners should be cleared once they are of no use to the component otherwise they'll lead to memory leaks
import { useState, useEffect } from "react"

function CleanEffect(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        let timer = setTimeout(
            ()=>setCount(c => c + 1), 1000
        )

        return ()=>{ 
            clearTimeout(timer)
            console.log('Effect cleared after ' + timer + ' seconds')
        }
    }, [])

    return <h2>I've rendered {count} times !</h2>
}

export default CleanEffect