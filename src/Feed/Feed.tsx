import './Feed.css'
import { StoryReel } from '../StoryReel/StoryReel'
import { MessageSender } from '../MessageSender/MessageSender'
import { Post } from '../Post/Post'

const Feed: React.FC = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post />
        </div>
    )
}

export { Feed }
