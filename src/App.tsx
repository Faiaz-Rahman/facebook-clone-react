import './App.css'
import { Login } from './Login/Login'

// Firebase
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './Firebase/firebase'
import { Routes, Route } from 'react-router-dom'
import { Container } from './Container/Container'

initializeApp(firebaseConfig)

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Container />} />
            </Routes>
        </div>
    )
}

export default App
