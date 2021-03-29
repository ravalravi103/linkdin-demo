import React from 'react';
import './HeaderOption.css';

function HeaderOption({Icon,title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            <h5 className="headerOption__title">{title}</h5>  
        </div>
    )
}

export default HeaderOption
