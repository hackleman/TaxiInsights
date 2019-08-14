import React from "react";
import {Link} from 'react-router-dom';
import './sections.scss';

export default function Section({ title, color, padding, page, id, dark }) {

  return (
        <Link to={page}>
            <div className={"mapsection" + padding + (dark ? " mapsection-dark" : "")} style = {{backgroundColor: color}}>
                <div className="mapsection-content" id={id}>
                    <div className ={ "mapsection-text" }>
                        <span className="border-title">
                        {title}
                        </span>
                    </div>
                </div>
            </div>
        </Link>

  );
}