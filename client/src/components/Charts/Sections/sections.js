import React from "react";
import {Link} from 'react-router-dom';
import './sections.css';

export default function Section({ title, page, color, id, dark }) {

  return (
    <Link to={page}>
        <div className={"chartsection" + (dark ? " chartsection-dark" : "")} style = {{backgroundColor: color}}>
            <div className="chartsection-content" id={id}>
                <div className ={ "chartsection-text" }>
                    <span className="border-title">
                    {title}
                    </span>
                </div>
            </div>
        </div>
    </Link>
  );
}