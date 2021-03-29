import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar
                    className="sidebar__avatar"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFTuwdqHCjaSQ/profile-displayphoto-shrink_100_100/0/1608096000035?e=1618444800&v=beta&t=q55OElKpYjr8F6Cb2cG5mpX0dQ0rq5MnZ8pCD9AGY2s" />
                <h4>RAVAL RAVI</h4>
                <h4>Web Developer | React Js | JavaScript | Typescript | wordPress</h4>
            </div>

            <div className="sidebar__stats">
                <div>
                    <p>Who Views Your Profile</p>
                    <p>2,000</p>
                </div>
                <div>
                    <p>Views Of Your Post</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
