import React, { Component } from "react"
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react"
import Axios from "axios"

import BathroomGet from '../../utils/bathroom'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: { lat: 32, lng: 32 },
      loading: true,
      geo: { city: '', state: '' },
      locations: [],
      dbArr: [],
      geoArr: [],
      reverseGeo: {},
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      id: [],
      idArr: [],
      nameArr: []
    }
    this.init()
  }

  async init() {
    await navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      this.setState({
        userLocation: { lat: latitude, lng: longitude },
        loading: false
      })
    })
    //this.reverseGeocode()
    this.getBathrooms()
    //this.compareFunc()
    //this.renderMarkers()
  }

  reverseGeocode() {
    setTimeout(() => {
      Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.userLocation.lat}, ${this.state.userLocation.lng}&key=${process.env.map_key}`)
        .then(res => res.data.results.map(i => {
          // console.log(i.address_components[2].short_name)
          console.log(i.address_components)
          this.setState({ reverseGeo: { cityGeo: i.address_components[2].short_name } })
          console.log(this.state.reverseGeo.cityGeo)
        }))
    }, 3500)
    setTimeout(() => {
      this.getBathrooms()
    }, 5500)

  }

  //get request from db
  getBathrooms() {
    BathroomGet.getAll('Irvine', 'Ca')
      .then(({ data }) => {
        this.setState({ dbArr: data })
        // this.setState({ idArr: data })
        // this.state.idArr.forEach(i => {
        //   this.setState({ id: i.id })
        //   //console.log(this.state.id)
        // })
        this.state.dbArr.forEach(i => {
          Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${i.street}+${i.city}+${i.state}&key=${process.env.map_key}`)
            .then(res => res.data.results.map(i => {
              this.setState({ geoArr: this.state.geoArr.concat(i.geometry) })
              console.log(this.state.geoArr)
            }))
        })
      })
  }

  //markers to display name

  //display markers of locations
  renderMarkers() {
    return this.state.geoArr.map((location, i) => {
      return <Marker
        key={i}
        onClick={this.onMarkerClick}
        //title={location.name}
        position={location.location}
        // desc={location.desc}
        // animation={this.state.animation[i]}
        name={location.name}
      />
    })
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  // onMapClicked = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   }
  // };

  renderMap() {
    return (
      <div>
        <Map
          google={this.props.google}
          initialCenter={this.state.userLocation}
          zoom={16}
          style={{ width: "100%", height: "67%" }}
        >
          <Marker onClick={this.onMarkerClick} name="Current Location">position={this.state.userLocation}</Marker>
          {this.renderMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <p>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>

    )
  }

  render() {
    //do not put anything that will setState
    return (
      <div>
        {this.state.loading ? null : this.renderMap()}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.map_key
})(MapContainer);