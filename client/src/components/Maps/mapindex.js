import React, { Component } from 'react';
import MapText from './UI/Sections/text';
import MapHeader from './UI/Sections/mapheader';
import DropdownSection from './UI/Sections/dropdown';
import { Element } from "react-scroll";

import './mapindex.scss';


class MapIndex extends Component {

    render() {
        return (
            <div className = "mapindex">
                <MapHeader />
                <MapText />
                <Element name="MapIndex">
                    <DropdownSection />
                </Element>
              </div>
        );
    }
}

export default MapIndex;
