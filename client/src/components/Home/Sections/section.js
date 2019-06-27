import React from "react";
import {Link} from 'react-router-dom';



export default function Section({ title, subtitle, dark, id, img, extra, header, nobody, page }) {


  return (
        <Link to={page}>
          <div className={"section" + img + (dark ? " section-dark" : "") + (header ? " headertitle": "")}>
            <div className="section-content"  id={id} >
              <div className ={ "section-text" +  (nobody ? " centertitle": "")}>
                <span className="border-title">
                  {title}
                </span>
              </div>

              <div className = { "section-text" + (nobody ? " nobody": "")}>
                <div className ="border">
                  {subtitle}
                </div>
              </div>
            </div>
          </div>
        </Link>

  );
}