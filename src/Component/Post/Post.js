import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post() {

    const postImgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEJoZcq1TnKkY8cvau4f-1OVN1DU8lFm8Og&usqp=CAU"
    return (
        <div className="Post">
            <div className="post__header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQFTuwdqHCjaSQ/profile-displayphoto-shrink_100_100/0/1608096000035?e=1618444800&v=beta&t=q55OElKpYjr8F6Cb2cG5mpX0dQ0rq5MnZ8pCD9AGY2s" />
                 <div className="post__header-userDesc">
                    <h4 className="userName">Raval Ravi</h4>
                    <p className="user-skills">Web Developer | Softwere Engineer | Javascript</p>
                 </div>
            </div>
            <p>this is test post</p>
            <img src={postImgSrc} alt=""/>
        </div>
    )
}

export default Post
