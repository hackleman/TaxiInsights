import React from 'react';
import './headers.scss';

export default function Header({ title, color }) {
    return (
        <div className="Header" style = {{backgroundColor: color}}>
            <div className = "title">
                {title}
            </div>
        </div>
    );
  }