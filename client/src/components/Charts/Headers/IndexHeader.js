import React from 'react';
import './headers.scss';

export default function IndexHeader({ title }) {
    return (
        <div className="index-header">
            <div className = "title">
                {title}
            </div>
        </div>
    );
  }