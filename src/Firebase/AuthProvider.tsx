import React, { createContext, useState } from 'react'

import { PostProps } from '../Post/Post'
import { feedData } from '../Feed/Feed'

export interface AuthContextInterface {
    posts: PostProps[]
}

export const AuthContext = createContext<AuthContextInterface>(
    {} as AuthContextInterface
)

type Props = {
    children: JSX.Element
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    return (
        <AuthContext.Provider value={{ posts: feedData }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
