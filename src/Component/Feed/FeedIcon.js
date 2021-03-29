import React from 'react';
import './FeedIcon.css';

function FeedIcon({Icon,title,color}) {
    return (
        <div className="FeedIcon">
             <Icon style={{color:color}}/>
            <p className="FeedIcon__text">{title}</p>
        </div>
    )
}

export default FeedIcon
