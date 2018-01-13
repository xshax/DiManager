import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TrackItem from './components/trackitem'

import Form from './components/form'

class App extends Component {
 constructor(props){
    super(props);
  
   this.removeTrack=this.removeTrack.bind(this);
   }
  
  
  
   removeTrack(id){
     //console.log("removing:",id);
     this.setState({
     tracks:this.state.tracks.filter((tracks,index)=>tracks.id!==id)
    });
   }
  
  
  //render f
  
  state={
    fields:{},
     tracks:[
        {id:0, name:"TO1 from2 namee",to:'t' ,from:'f'},
        {id:1, name:"TO1 from2 namee",to:'t2' ,from:'f2'},
        {id:2, name:"TO1 from2 namee",to:'t3' ,from:'f3'},
      ],
      nextId:3
  }
  
  onSubmit=(fields)=>{
    this.setState({fields});
    console.log("App comp got :",fields);
    
    let tracks=this.state.tracks.slice();
    tracks.push(
    {id:this.state.nextId,
    name:fields.firstName,
    from:fields.lastName,
    to:fields.userName
      
    }
    );
    
    this.setState({
      tracks:tracks,
      nextId:++this.state.nextId
    });
    console.log(tracks);
    
    
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
       
          <h1 className="App-title">DiManager -  manager de trasee</h1>
        </header>
        <p className="App-intro">
          Adaugati adresa
        </p>
        
        <div className="main-wrapper">
        <Header/>
       
        <Form onSubmit={fields=>this.onSubmit(fields)}/>
        <span>Traseu: </span>
        <span>{this.state.fields.firstName}</span>
        <span>[</span>
        <span>{this.state.fields.lastName}</span>
        <span>-</span>
        <span>{this.state.fields.userName}</span>
        <span>]</span>
        
        <ul>
        
        {
          this.state.tracks.map((track)=>{
            return <TrackItem track={track} key={track.id}
            id={track.id} removeTrack={this.removeTrack}/>
          })
        }
        </ul>
        
        
      
        </div>
        
      </div>
    );
  }
}

export default App;
