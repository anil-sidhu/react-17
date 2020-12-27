import React from 'react'
export default function UserInfo(p) {
 
    // React.useEffect( () => () => console.log("unmount"), [] );
React.useEffect(()=>{
    console.warn("data",p)
},[p.count])
    return (
        <div>
            <h1>User Component {p.count}</h1>
        </div>
    )
}