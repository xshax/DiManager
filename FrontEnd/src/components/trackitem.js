import React from 'react';
import './trackitem.css';

export default class TrackItem extends React.Component{
   
    removeTrack(id){
        this.props.removeTrack(id);
    }
    
     editTrack(id){
        this.props.removeTrack(id);
    }
    
    render(){
        return(
            <div className="trackWrapper">
            <button className="removeTrack" 
            onClick={(e)=>this.removeTrack(this.props.id)}>remove</button>
            
            <button className="editTrack" 
            onClick={(e)=>this.editTrack(this.props.id)}>edit</button>
            
            {this.props.track.name} 
            {this.props.track.from}
            {this.props.track.to}
            
           
            </div>
            )
    }
    
}