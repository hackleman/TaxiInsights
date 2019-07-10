import React, { Component } from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';

import Heading from '../Headers/headers';
import Filter from '../Filter/filter';
import config from '../assets/config.js';
import geojson from '../assets/taxi.json';
import axios from 'axios';

import './costmap.scss';



class CostMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      categoryFilter: '*',
      categories: [],
      mapdata: null
    }

    this._mapNode = null;
    this.onEachFeature = this.onEachFeature.bind(this);
    this.addStyle = this.addStyle.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.filter = this.filter.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.findMax = this.findMax.bind(this);
    this.findHue = this.findHue.bind(this);
  }

  componentWillMount() {
    for(let i = 1; i < 24; i++) {
      this.state.categories.push(i);
    }
  }
  componentDidMount() {
    this.getGeoJSON();
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }

    if (this.state.categoryFilter !== prevState.categoryFilter) {
      console.log('component updated');
      this.filter();
    }
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  updateMap(e) {
    console.log(e);
    let category = parseInt(e);
  
    this.setState({
      categoryFilter: category
    })
  }

  getGeoJSON() {
    this.setState({ geojson });
  }

  setStyle() {
    let start = 0;
    let end = 265;
    let hue = '';
    let data = this.mapdata;
    let current = this;
    
    if (data) {
      let max = this.findMax(data.data);

      this.state.geojsonLayer.eachLayer(function(featureInstancelayer) {
        let value = featureInstancelayer.feature.properties.OBJECTID;

        for (let _i = start; _i < end; _i ++) {
          if (data.data[_i] && data.data[_i].pickupzone === value) {
            hue = current.findHue(max, data.data[_i].avg);
            featureInstancelayer.setStyle({
              fillColor: hue,
              fillOpacity: 0.8,
              weight: 0.5
            })
            start = _i;
          }
        }
      });
    }
  }

  findMax(data) {
    let max = 0;
      for (let _i of data) {
        if (_i.avg > max) max = _i.avg;
      }
    return max;
  }
  
  findHue(max, value) {
    let ratio = value / max;

    return ratio > .95 ? '#800026' :
    ratio > .85  ? '#BD0026' :
    ratio > .70  ? '#E31A1C' :
    ratio > .60  ? '#FC4E2A' :
    ratio > .50   ? '#FD8D3C' :
    ratio > .20   ? '#FEB24C' :
    ratio > .10   ? '#FED976' :
               '#FFEDA0';
  }

  addStyle(feature) {
    return {
      fillColor: this.getColor(feature.properties.OBJECTID),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    }
  }

  filter() {
    let current = this;

    axios.get('http://cf790377.ngrok.io/data/costhour/' + current.state.categoryFilter.toString())
    .then(function (response) {
      current.mapdata = response;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(current.setStyle()); 

  }

  addGeoJSONLayer(geojson) {
    let geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      style: config.map1.geojson
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
        `<h3 style = ({font-family: Helvetica;})>Zone #: ${feature.properties.OBJECTID}</h3>
          <div><p>Borough:${feature.properties.borough}</p></div>
          <div><p>Neighborhood:${feature.properties.zone}</p> </div>
        `;
      layer.bindPopup(popupContent);
    }
  }

  init(id) {
    if (this.state.map) return;

    let map = L.map(id, config.map1.params);

    L.control.zoom({ position: "topright"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    const tileLayer = L.tileLayer(config.map1.tileLayer.uri, config.map1.tileLayer.params).addTo(map);
    this.setState({ map, tileLayer });
  }

  render() {
    return (
      <div className = "map1component">
        <div className = "map1header">
          <Heading
              title="Cost by Hour"
              id="costmap"
              dark={true}
          />
        </div>
        <div className = "mapUI">
          <Filter categories={this.state.categories}
            curFilter={this.filter}
            filterHour={this.updateMap} />
          <div ref={(node) => this._mapNode = node} id="map" />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({

})

export default connect(
  mapStateToProps,
  { }
)(CostMap);