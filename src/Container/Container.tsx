import React from 'react'
import { Feed } from '../Feed/Feed'
import { Header } from '../Header/Header'
import { Login } from '../Login/Login'
import { Sidebar } from '../Sidebar/Sidebar'
import { Widget } from '../Widget/Widget'

const Container: React.FC = () => {
    const user: string | null = '1'

    if (user === null) {
        return <Login />
    } else {
        return (
            <>
                {/* Headers */}
                <Header />
                {/* App Body */}
                <div className="app__body">
                    {/* Sidebar */}
                    <Sidebar />
                    {/* Feed */}
                    <Feed />
                    {/* Widgets */}
                    <Widget />
                </div>
            </>
        )
    }
}

export { Container }
