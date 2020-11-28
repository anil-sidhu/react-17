function User(props)
{
    const name="Anil Sidhu"
    return(
        <div>
            <h1>User Name is : </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;