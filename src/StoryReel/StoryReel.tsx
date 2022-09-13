import { Story } from '../Story/Story'
import './StoryReel.css'

const profileImg: string =
    'https://upload.wikimedia.org/wikipedia/commons/6/63/Icon_Bird_512x512.png'

const image: string = 'https://cdn-icons-png.flaticon.com/512/21/21104.png'

const StoryReel: React.FC = () => {
    return (
        <div className="storyReel">
            <Story title="Nafee" profileSrc={profileImg} img={image} />
            <Story title="Nafee" profileSrc={profileImg} img={image} />
            <Story title="Nafee" profileSrc={profileImg} img={image} />
            <Story title="Nafee" profileSrc={profileImg} img={image} />
            <Story title="Nafee" profileSrc={profileImg} img={image} />
        </div>
    )
}

export { StoryReel }
