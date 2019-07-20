import React, { Component } from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';
import axios from 'axios';

import Heading from './UI/Headers/headers';
import Filter from './UI/filter';
import MobileFilter from './UI/filtermodal';
import Legend from './UI/legend';
import LegendModal from './UI/legendmodal';
import config from './assets/config.js';
import geojson from './assets/taxi.json';


import './map.scss';



class BaseMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      categoryFilter: '',
      categories: [],
      mapdata: null,
      modal: false,
      legendmodal: false,
      maximum: 0,
      minimum: 0,
      configmap: this.props.config,
      options: this.props.options
    }

    this._mapNode = null;
    this.onEachFeature = this.onEachFeature.bind(this);
    this.setStyle = this.setStyle.bind(this);
    this.filter = this.filter.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.updateModalMap = this.updateModalMap.bind(this);
    this.findMax = this.findMax.bind(this);
    this.findMin = this.findMin.bind(this);
    this.findHue = this.findHue.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleLegend = this.toggleLegend.bind(this);
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
      this.filter();
    }
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  updateMap(e) {
    let category = parseInt(e);
  
    this.setState({
      categoryFilter: category
    })
  }

  updateModalMap(e) {
    this.setState( prevState => ({
      modal: !prevState.modal
    }));

    let category = parseInt(e);
  
    this.setState({
      categoryFilter: category
    })
  }

  getGeoJSON() {
    this.setState({ geojson });
  }

  addGeoJSONLayer(geojson) {
    let geoJSONstyle = config[this.state.options].geojson;

    let geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      style: geoJSONstyle
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

  filter() {
    let current = this;
    let category = this.state.categoryFilter.toString();
    let dataURI = this.props.datauri.toString();

    axios.get('http://ec2-50-16-48-163.compute-1.amazonaws.com/data/' + dataURI +  category)
    .then(function (response) {
      current.setStyle(response)
    })
    .catch(function (error) {
      console.log(error);
    })

  }

  setStyle(mapdata) {
    let start = 0;
    let end = 265;
    let hue = '';
    let data = mapdata;
    let current = this;
    
    if (data) {
      let max = this.findMax(data.data);
      this.findMin(data.data);

      this.state.geojsonLayer.eachLayer(function(featureInstancelayer) {
        let value = featureInstancelayer.feature.properties.OBJECTID;

        for (let _i = start; _i < end; _i ++) {
          if (data.data[_i] && data.data[_i].pickupzone === value) {
            hue = current.findHue(max, data.data[_i].avg);
            featureInstancelayer.setStyle({
              fillColor: hue,
              fillOpacity: 1,
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
    this.setState({maximum: max});
    return max;
  }
  
  findMin(data) {
    let min = 0;
      for (let _i of data) {
        if (_i.avg < min) min = _i.avg;
      }
      this.setState({minimum: min});
    return min;
  }

  findHue(max, value) {
    let ratio = value / max;
    let gradients = config.gradients;

    return ratio > .95 ? gradients[1] :
    ratio > .85  ? gradients[2] :
    ratio > .70  ? gradients[3] :
    ratio > .60  ? gradients[4] :
    ratio > .50   ? gradients[5] :
    ratio > .20   ? gradients[6] :
    ratio > .10   ? gradients[7] :
            gradients[8];
  }

  init(id) {
    let mapstyle = this.state.configmap;
    if (this.state.map) return;

    let map = L.map(id, config[mapstyle].params);

    L.control.zoom({ position: "topright"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);

    const tileLayer = L.tileLayer(config[mapstyle].tileLayer.uri, config[mapstyle].tileLayer.params).addTo(map);
    this.setState({ map, tileLayer });
  }

  toggle() {
    this.setState( prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleLegend() {
    this.setState( prevState => ({
      legendmodal: !prevState.legendmodal
    }));
  }
  
  render() {
    return (
      <div className = "CostMapComponent">
        <div className = "CostMapHeader">
          <Heading
              title={config[this.state.options].header}
              id="costmap"
              dark={true}
          />
        </div>
        <div className = "mapUI">
          <Filter
              options = {this.state.options} 
              categories={this.state.categories}
              curFilter={this.filter}
              filterHour={this.updateMap} 
          />
          <MobileFilter
              isOpen = {this.state.modal} toggle={this.toggle} filterHour = {this.updateModalMap} options = {this.state.options}
          />
          <Legend 
            max = {this.state.maximum} min = {this.state.minimum} options = {this.state.options}
          />
          <LegendModal
            isOpen = {this.state.legendmodal} toggle={this.toggleLegend} max = {this.state.maximum} min = {this.state.minimum} options = {this.state.options}
          />
          <div 
            ref={(node) => this._mapNode = node} id="map" 
          />
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
)(BaseMap);