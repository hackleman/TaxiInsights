import React from "react";
import {Link} from 'react-router-dom';
import './sections.css';

export default function Section({ title, color, page, id, dark }) {

  return (
        <Link to={page}>
        <div className={"graphsection" + (dark ? " graphsection-dark" : "")} style = {{backgroundColor: color}}>
            <div className="graphsection-content" id={id}>
                <div className ={ "graphsection-text" }>
                    <span className="border-title">
                    {title}
                    </span>
                </div>
            </div>
        </div>
        </Link>

  );
}