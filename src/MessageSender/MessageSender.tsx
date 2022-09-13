import { Avatar } from '@material-ui/core'
import React, { useState, FormEvent } from 'react'
import './MessageSender.css'

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

type TsxValue = {
    inputVal: string
}

const MessageSender: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        console.log(input)
        // Resetting values after usage
        setInput('')
        setImage('')
    }

    // const [input, setInput] = useState<TsxValue>({ inputVal: '' })
    const [input, setInput] = useState<string>('')
    const [image, setImage] = useState<string>('')

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        placeholder="Whats on your mind"
                        className="messageSender__input"
                        // value={input.inputVal}
                        // onChange={(e) => {
                        //     setInput({ inputVal: e.target.value })
                        //     console.log(e.target.value)
                        // }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <input placeholder="image URL(optional)" />
                    {/* Hidden Button for extra functionality */}
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h6>Live Video</h6>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h6>Photo/Video</h6>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h6>Feeling/Activity</h6>
                </div>
            </div>
        </div>
    )
}

export { MessageSender }
