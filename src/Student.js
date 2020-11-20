import React from 'react'
class Student extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>Student Component</h1>
    }
}

export default Student