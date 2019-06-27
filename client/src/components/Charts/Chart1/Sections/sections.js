import React from "react";
import './sections.css';

export default function Section({ title, dark }) {

  return (
        <div className={"chartsection" + (dark ? " chart1section-dark" : "")}>
            <div className="chartsection-content" >
                <div className ={ "chartsection-text" }>
                    <span className="border-title">
                    {title}
                    </span>
                </div>
            </div>
        </div>

  );
}