import { useEffect, useContext } from 'react'
import './Login.css'

import { AuthContext } from '../Firebase/AuthProvider'

const fbLogo: string =
    'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png'

const fbText: string =
    'https://www.freeiconspng.com/uploads/facebook-simple-text-22.png'
const Login: React.FC = () => {
    const { posts } = useContext(AuthContext)

    return (
        <div className="login">
            <div className="login__logo">
                <img src={fbLogo} alt="" className="login__logo--image" />
                <img src={fbText} alt="" className="login__logo--text" />
                <button
                    onClick={() => {
                        console.log(posts)
                    }}>
                    Login
                </button>
            </div>
        </div>
    )
}

export { Login }
