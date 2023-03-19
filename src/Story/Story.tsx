import { Avatar } from '@material-ui/core'
import './Story.css'

type StoryProps = {
    img?: string
    profileSrc?: string
    title: string
}

export const bgImage: string =
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'

const Story: React.FC<StoryProps> = ({ img, profileSrc, title }) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="story">
            <Avatar src={profileSrc} className="story__avatar" />
            <h6>{title}</h6>
        </div>
    )
}

export { Story }
