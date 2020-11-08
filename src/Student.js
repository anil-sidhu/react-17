function Student(props) {
    console.log(props)
    return (
        <div style={{ backgroundColor: "skyblue", margin: 10 }}>
            <h1>Hello {props.name}</h1>
        </div>
    )
}

export default Student