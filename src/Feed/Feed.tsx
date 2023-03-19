import './Feed.css'
import { StoryReel } from '../StoryReel/StoryReel'
import { MessageSender } from '../MessageSender/MessageSender'
import { Post } from '../Post/Post'
import { bgImage } from '../Story/Story'

import { PostProps } from '../Post/Post'

const imageUrlForPost =
    'https://th-thumbnailer.cdn-si-edu.com/_fo23UThzt2yYi8vrV0jcafbQ3Q=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/25/f0/25f08cff-0355-4001-86ad-28950a866af4/grandteton.jpg'

const imageUrlForPost1 =
    'https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=pexels-pixabay-326058.jpg&fm=jpg'

export const feedData: PostProps[] = [
    {
        image: imageUrlForPost,
        message: 'How beautiful a moutain is!',
        profilePic: bgImage,
        username: 'Fiaz Rahman',
        timestamp: 'Timestamp'
    },
    {
        image: imageUrlForPost1,
        message: 'Can you see me in these moutains?',
        profilePic: bgImage,
        username: 'Shahriar Ahmed Mushfique',
        timestamp: 'Timestamp'
    }
]

const Feed: React.FC = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                image={imageUrlForPost}
                key={1}
                message={'How beautiful a moutain is!'}
                profilePic={bgImage}
                username={'Fiaz Rahman'}
            />
            <Post
                image={imageUrlForPost1}
                key={2}
                message={'Can you see me in these mountains?'}
                profilePic={bgImage}
                username={'Shahriar Ahmed Mushfique'}
            />
        </div>
    )
}

export { Feed }
