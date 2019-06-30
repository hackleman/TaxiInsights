import React, { Component } from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';

import Heading from '../Headers/headers';
import config from '../assets/config.js';
import geojson from '../assets/taxi.json';
import './map3.css';


class Map3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null
    }

    this._mapNode = null;
    this.onEachFeature = this.onEachFeature.bind(this);
  }

  componentDidMount() {
    this.getData();
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  getData() {
    this.setState({ geojson });
  }

  addGeoJSONLayer(geojson) {
    let style = config.map3.geojson

    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      style: style
    });
    
    geojsonLayer.addTo(this.state.map);
    this.setState({geojsonLayer});
    this.zoomToFeature(geojsonLayer);
  }

  zoomToFeature(target) {
    var padding = {
      paddingTopLeft: [10, 10],
      paddingBottomRight: [10, 10]
    };

    this.state.map.fitBounds(target.getBounds(), padding)
  }

  onEachFeature(feature, layer) {
    if (feature.properties.OBJECTID) {
      const popupContent = 
        `<h3>Zone Number: ${feature.properties.OBJECTID}</h3>
          <div><h1>Borough: </h1>  <p>   ${feature.properties.borough}</p></div>
          <div><h1>Neighborhood: </h1> <p>${feature.properties.zone}</p></div>`;

      layer.bindPopup(popupContent);
    }
  }

  init(id) {
    if (this.state.map) return;

    let map = L.map(id, config.map3.params);

    L.control.zoom({ position: "topleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    const tileLayer = L.tileLayer(config.map3.tileLayer.uri, config.map3.tileLayer.params).addTo(map);
    this.setState({ map, tileLayer });
  }


  render() {

    return (

      <div className = "map1component">
        <div className = "map1header">
          <Heading
              title="Map"
              dark={true}
          />
          </div>
            <div ref={(node) => this._mapNode = node} id="map" />
        </div>
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  {  }
)(Map3);