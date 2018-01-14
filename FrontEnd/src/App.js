import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TrackItem from './components/trackitem'
import Map from './components/gmap'
import Form from './components/form'
import axios from 'axios';





class App extends Component {
 constructor(props){
    super(props);
  
   this.removeTrack=this.removeTrack.bind(this);
   }
  
  
  
   removeTrack(id){
     //console.log("removing:",id);
     this.setState({
     tracks:this.state.tracks.filter((tracks,index)=>tracks.id!==id)});
     
     let api = 'https://di-manager-mirsha.c9users.io/tracks/'+id
      axios.delete(api).then((results) => {});
     
     
  }
  
  
  //render f
  
  state={
    fields:{},
     tracks:[
       // {id:0, name:"TO1 from2 namee",to:'t' ,from:'f'},
       // {id:1, name:"TO1 from2 namee",to:'t2' ,from:'f2'},
       // {id:2, name:"TO1 from2 namee",to:'t3' ,from:'f3'},
      ],
      nextId:1
  }

  
  onSubmit=(fields)=>{
    this.setState({fields});
    //console.log("App comp got :",fields);
    
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
    
    
    let api = 'https://di-manager-mirsha.c9users.io/tracks'
    axios.post(api , 
      {
       
        "name": fields.firstName,
        "category_id": 1,
        "locstart": fields.lastName,
        "locend": fields.userName,
        "rating": "97"
       
      }
    )
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
    
    
    
  }
  
  
  componentDidMount() {
  
          this.handleLoadTracks()
          
          
        }
   
    
   handleLoadTracks = () => {
    
    let api = 'https://di-manager-mirsha.c9users.io/tracks'
    axios.get(api).then((results) => {
      console.log(results.data);
       
       console.log(results.data.length);
       let tracks=this.state.tracks.slice();
       for(var i=0;i<results.data.length;i++)
       {
       tracks.push(
        {id:results.data[i].id,
        name:results.data[i].name,
          from:results.data[i].locstart,
          to:results.data[i].locend
        }
      );
      }
      
      this.setState({
      tracks:tracks,
      nextId:++this.state.nextId
       });
      //console.log(tracks);
      
      
    //  console.log(results.data[1].locstart);  
    });
  }
  


  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
       
          <h1 className="App-title">DiManager -  manager de trasee</h1>
        </header>
        
        <div className="main-wrapper">
        <Header/>
        
        <Form onSubmit={fields=>this.onSubmit(fields)}/>
        
        
        <Map />
        
        
        
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
