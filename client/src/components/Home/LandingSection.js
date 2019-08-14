import React from "react";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './home.scss';

export default function LandingSection({ title, id, subtitle, img, page, header, body }) {


  return (
    <Link to={page}>
        <Fade ssrFadeout>
            <div className={"landingsection" + img} id = {id}>
                <div className="section-content">
                    {!body &&
                        <div className="title">
                            {title}
                        </div>
                    }
                    {!header && 
                        <div className = "body">
                            {subtitle}
                        </div>
                    }
                </div>
            </div>
        </Fade>
    </Link>

  );
}