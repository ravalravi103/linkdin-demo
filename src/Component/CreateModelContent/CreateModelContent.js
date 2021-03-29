import { Avatar } from '@material-ui/core';
import React from 'react';
import FeedIcon from '../Feed/FeedIcon';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import './CreateModelContent.css';

function CreateModelContent({imgeSrc,name}) {
    return (
        <div className="CreateModelContent">
             <div className="create__model-top">
                 <Avatar src={imgeSrc}/>
                 <h3 className="useName">{name}</h3>
            </div>
            <div className="text-box">
                <input 
                    type="text" 
                    placeholder="What Do ypu want to Talk About ?? "
                    className="createPost__input-box"/>
            </div>
            <div className="myIcon">
                <FeedIcon Icon={PhotoCameraIcon} />
                <FeedIcon Icon={OndemandVideoIcon} />
                <FeedIcon Icon={EventAvailableOutlinedIcon}/>
            </div>
        </div>
    )
}

export default CreateModelContent
