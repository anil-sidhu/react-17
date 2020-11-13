function Student(props) {
    
    return(
        <div>
            <h1>Student Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default Student;