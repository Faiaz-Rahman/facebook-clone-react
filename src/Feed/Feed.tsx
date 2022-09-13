import './Feed.css'
import { StoryReel } from '../StoryReel/StoryReel'
import { MessageSender } from '../MessageSender/MessageSender'

const Feed: React.FC = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
        </div>
    )
}

export { Feed }
