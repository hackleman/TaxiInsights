import React from "react";
import './headers.css';

export default function MapHeader({ title, dark, mapnumber }) {

  return (
        <div className={"mapsection" + (dark ? " map1section-dark" : "")}>
            <div className="mapsection-content" >
                <div className ={ "mapsection-text" }>
                    <span className="border-title">
                    {title}
                    </span>
                </div>
            </div>
        </div>

  );
}