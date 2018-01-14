import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div className="pin">{ text }</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 44.447892, lng: 26.099313 },
    zoom: 15
  }
  
  
   
  
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 44.447892 }
            lng={ 26.099313 }
                text="ase" />
        </GoogleMapReact>
      </div>
    )
  }
}

