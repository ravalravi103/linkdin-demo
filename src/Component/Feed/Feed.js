import { Avatar } from '@material-ui/core';
import { Modal,Button } from 'antd';
import React,{useState} from 'react';
import './Feed.css';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import FeedIcon from './FeedIcon';
import CreateModelContent from '../CreateModelContent/CreateModelContent';
import Post from '../Post/Post';

function Feed() {

    const imgSrc = "https://media-exp1.licdn.com/dms/image/C5603AQFTuwdqHCjaSQ/profile-displayphoto-shrink_100_100/0/1608096000035?e=1618444800&v=beta&t=q55OElKpYjr8F6Cb2cG5mpX0dQ0rq5MnZ8pCD9AGY2s"

    const [visible,setVisible] = useState(false);

    function showModel(){
        console.log(visible);
        setVisible(!visible)
    }
    function handleOk(){

    }

    function handleCancel(){
        setVisible(false)
    }

    return (
       <div>
         <div className="feed">
            <div className="feed__input-box">
                <Avatar src={imgSrc}/>              
                <Button className="feed__input-btn" onClick={showModel}>start a Post</Button>
                <Modal
                    visible={visible}
                    title={<h3>Create a Post</h3>}
                    onOk={handleOk}
                    onCancel={handleCancel}>
                       <CreateModelContent imgeSrc={imgSrc} name="Raval Ravi"/>              
                </Modal>
            </div>  
            <div className="feed__input-icon">
                <FeedIcon Icon={PhotoCameraIcon} title="photo" color="blue"/>
                <FeedIcon Icon={OndemandVideoIcon} title="Video" color="green"/>
                <FeedIcon Icon={EventAvailableOutlinedIcon} title="Event" color="orange"/>
                <FeedIcon Icon={SubjectOutlinedIcon} title="Notes" color="red"/>
            </div>   
        </div>

        {/* Posts Gose Here */}
         <div className="Post__List">
              <Post />
              <Post />
              <Post />
              <Post />
         </div>
       </div>
    )
}

export default Feed
