import React from "react";
import {Link} from 'react-router-dom';
import Padding from './Padding/padding';


export default function Section({ title, subtitle, dark, id, style, extra, nostyle, nobody, page }) {

  let picture;

  if (style === 1) {
    picture = " picture1"
  } else if (style === 2) {
    picture = " picture2"
  } else if (style === 3) {
    picture = " picture3"
  } else if (style === 4) {
    picture = " notextstyle"
  } else if (style === 5) {
    picture = " picture4"
  }
  else {
      picture = ""
  }

  return (
        <Link to={page}>
        <div className={"section" + (dark ? " section-dark" : "") + picture }>
        <div className="section-content" id={id}>
          <div className ={ "section-text" + (nostyle ? " nostyle": "")}>
            <span className="border-title">
              {title}
            </span>
          </div>
          <br></br>
          <div className = { "section-text" + (nobody ? " nobody": "")}>
            <div className ="border">
              {subtitle}
            </div>
          </div>
          <div >
            {extra ? <Padding />: <div></div>}
          </div>
        </div>
        </div>
        </Link>

  );
}