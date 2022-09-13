import { Avatar } from '@material-ui/core'
import React, { ButtonHTMLAttributes, FormEvent } from 'react'
import './MessageSender.css'

const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
}

const MessageSender: React.FC = () => {
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input placeholder="Whats on your mind" />
                    <input placeholder="image URL(optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom"></div>
        </div>
    )
}

export { MessageSender }
