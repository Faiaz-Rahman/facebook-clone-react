import './App.css'
import { Header } from '../src/Header/Header'
import { Sidebar } from '../src/Sidebar/Sidebar'
import { Feed } from './Feed/Feed'

function App() {
    return (
        <div className="app">
            {/* Headers */}
            <Header />
            {/* App Body */}
            <div className="app__body">
                {/* Sidebar */}
                <Sidebar />
                {/* Feed */}
                <Feed />
                {/* Widgets */}
            </div>
        </div>
    )
}

export default App
