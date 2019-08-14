import React from "react";
import { Link } from 'react-router-dom';
import './sections.scss';

export default function Section({ title, page, color }) {
  return (
    <Link to={page}>
        <div className="chartsection " style = {{backgroundColor: color}}>
          <div className="title">
            {title}
          </div>
        </div>
    </Link>
  );
}