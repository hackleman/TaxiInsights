import React, { Component } from "react";

import '../sections.scss';


class MapHeader extends Component {

    render() {
        return (

        <div className = 'header-img'>
          <div className ="mapsection-text">
            <span className="border-title">
              Chloropleth Maps
            </span>
          </div>
        </div>
        );
    }
}

export default MapHeader;

