import React, { Component } from 'react';
import MapText from './UI/Sections/text';
import MapHeader from './UI/Sections/Headers/mapheader';
import SectionList from './UI/Sections/sectionlist';
import { Element } from "react-scroll";

import './mapindex.scss';


class MapIndex extends Component {

    render() {
        return (
            <div className = "mapindex">
                <MapHeader />
                <MapText />
                <Element name="MapIndex">
                    <SectionList />
                </Element>
              </div>
        );
    }
}

export default MapIndex;
