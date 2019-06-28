import React from 'react'
export default class Classcomp extends React.Component{
    state={
        buttonColor: 'blue',
    }
    render(){
        return <button onClick={()=>{this.setState({buttonColor:'red'});
        this.props.onClick();}} style={{backgroundColor: this.state.buttonColor}}> 
        {this.props.children}</button>
        
        }
    componentDidMount(){
        setTimeout(()=>{alert("hello")},
        2000)
    }

    componentWillUnmount(){
        alert("goodbye");
    }
}