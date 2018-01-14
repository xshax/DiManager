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
            
            <b>{this.props.track.id}.&nbsp;</b>
            
            {this.props.track.name}:&nbsp;&nbsp; 
            {this.props.track.from} &nbsp; -> &nbsp; 
            {this.props.track.to}
            
            
           
            </div>
            )
    }
    
}