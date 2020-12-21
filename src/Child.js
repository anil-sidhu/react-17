import React,{useEffect,useRef} from 'react'
function Child(props)
{
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const previousProps=lastVal.current
    return(
        <div>
            <h1>Count is  : {props.count}</h1>
            <h1>previous Props is  : {previousProps}</h1>

        </div>
    )
}

export default Child