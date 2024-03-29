import { Avatar } from '@material-ui/core'
import './Post.css'

import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

export type PostProps = {
    profilePic?: string
    image?: string
    username?: string
    timestamp?: string
    message?: string
}

const Post: React.FC<PostProps> = (props) => {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={props.profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h6>{props.username}</h6>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{props.message}</p>
            </div>
            <div className="post__image">
                <img src={props.image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}
export { Post }
