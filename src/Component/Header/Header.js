import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';

function Header() {

    const appLogo = "https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
    const MyProfieString = "https://media-exp1.licdn.com/dms/image/C5603AQFTuwdqHCjaSQ/profile-displayphoto-shrink_100_100/0/1608096000035?e=1618444800&v=beta&t=q55OElKpYjr8F6Cb2cG5mpX0dQ0rq5MnZ8pCD9AGY2s";
    return (
        <div className="header">
            <div className="header__left">
                 <img src={appLogo} alt=""/>
                 <div className="search__box">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                     {/* SearchIcon */}
                    
                 </div>   
            </div>
            <div className="header__right">
                  <HeaderOption Icon={HomeIcon} title="Home"/>
                  <HeaderOption Icon={GroupAddIcon} title="My Network"/>
                  <HeaderOption Icon={WorkIcon} title="Jobs"/>
                  <HeaderOption Icon={MessageIcon} title="Message"/>
                  <HeaderOption Icon={NotificationsIcon} title="Notification"/>
                  <Avatar src={MyProfieString}/>
            </div>
        </div>
    )
}

export default Header
