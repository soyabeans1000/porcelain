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

  init() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      this.setState({
        userLocation: { lat: latitude, lng: longitude },
        loading: false
      })
      this.reverseGeocode()
      this.getBathrooms()
    })
  }

  reverseGeocode() {
    setTimeout(() => {
      Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.userLocation.lat}, ${this.state.userLocation.lng}&key=${process.env.map_key}`)
        .then(res => res.data)
        .then(({ results }) => {
          let i = results[0].address_components
          this.setState({ reverseGeo: { city: i[2].long_name, state: i[4].short_name } })
        })
    }, 2000)
  }

  //get request from db
  getBathrooms() {
    setTimeout(() => {
      BathroomGet.getAll(this.state.reverseGeo.city, this.state.reverseGeo.state)
        .then(({ data }) => {
          this.setState({ dbArr: data })
          this.state.dbArr.forEach(i => {
            let id = i.id
            Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${i.street}+${i.city}+${i.state}&key=${process.env.map_key}`)
              .then(res => res.data.results.map(i => {
                let newarr = {
                  location: i.geometry.location,
                  id: id
                }
                this.setState({ geoArr: this.state.geoArr.concat(newarr) })
              }))
          })
        })
    }, 2900)
  }


  renderMarkers() {
    return this.state.geoArr.map(({location, id}) => {
      return <Marker
        onClick={this.onMarkerClick}
        position={location}
        id={id}
      />
    })
  }


  onMarkerClick = (props, marker, e) =>
    {console.log(this.props.handleOnClick)
    this.props.handleOnClick(marker.id)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: false
    })};


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