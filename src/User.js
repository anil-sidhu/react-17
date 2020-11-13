function User(props) {
    
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default User;