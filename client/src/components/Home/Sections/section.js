import React from "react";
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import '../home.scss';

export default function Section({ title, subtitle, dark, id, img, extra, header, nobody, page }) {


  return (
      <div className = 'sectioncontainer'>
        <Link to={page}>
          <div className={"section" + img + (dark ? " section-dark" : "") + (header ? " headertitle": "")}>
            <Fade ssrFadeout>
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
            </Fade>
          </div>
        </Link>
        </div>
        

  );
}