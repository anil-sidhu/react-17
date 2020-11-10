import React from 'react'
export default class Student extends React.Component {

    
    render() {
        console.warn(this.props.name)
        return (
            <div style={{backgroundColor:"skyblue",margin:20}}>
                <h1>Hello {this.props.name}</h1>
        <h2>Email: {this.props.email}</h2>
            </div>
        )
    }

} 