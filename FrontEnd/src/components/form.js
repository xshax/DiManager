import React from 'react';
import './form.css';

export default class Form extends React.Component{
    state={
        firstName:'',
        lastName:'',
        userName:''
    }
    
    onSubmit=e=>
    {
        e.preventDefault();
        this.props.onSubmit(this.state);
        //console.log(this.state);
        this.setState({
        firstName:'',
        lastName:'',
        userName:''
        });
    }
    
    
    
    
    render(){
        return(
        
            <form>
            
                <input placeholder='name' value={this.state.firstName} 
                onChange={e=>this.setState({firstName: e.target.value})}/>
                <br/>
                 <input placeholder='from' value={this.state.lastName} 
                onChange={e=>this.setState({lastName: e.target.value})}/>
                <br/>
                 <input placeholder='to' value={this.state.userName} 
                 onChange={e=>this.setState({userName: e.target.value})}/>
                <br/>
                 <button className="buttonform"onClick={e=>this.onSubmit(e)}>Submit</button>
            </form>
            
        );
    }
    
    
}