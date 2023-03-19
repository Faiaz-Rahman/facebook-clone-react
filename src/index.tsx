import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './Firebase/AuthProvider'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
)
