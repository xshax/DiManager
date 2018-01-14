import React from 'react';
import './form.css';

export default class Form extends React.Component{
    state={
        firstName:'',
        lastName:'',
        userName:''
    }
    
    onSearch=e=>
    {
        e.preventDefault();
        this.props.onSearch(this.state);
        console.log(this.state);
        this.setState({
        firstName:'',
        lastName:'',
        userName:''
        });
    }
    
    
    
    
    render(){
        return(
        
            <form>
            
                <input placeholder='search for track' value={this.state.firstName} 
                onChange={e=>this.setState({firstName: e.target.value})}/>
                 <button className="buttonform" onClick={e=>this.onSearch(e)}>Search</button>
            </form>
            
        );
    }
    
    
}