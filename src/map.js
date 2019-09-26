import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Spot from './spot.js'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
        //  bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Spot lat={59.955413} lng={30.337844}/>
          <Spot lat={59.95544} lng={30.5}/>
          <Spot lat={59.91} lng={30.45}/>
          <Spot lat={59.8} lng={30.3}/>
        
          </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
