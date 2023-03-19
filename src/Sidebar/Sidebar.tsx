import React, { ReactElement } from 'react'
import './Sidebar.css'
import { SidebarRow } from '../SidebarRow/SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { ExpandMoreOutlined } from '@material-ui/icons'

type UserType = {
    photoURL: string
    displayName: string
}

// const tsxFileDiscloser: React.FunctionComponent<ReactElement> = () => {
//     return <div>This is a tsx file...</div>
// }
let user: UserType = {
    photoURL: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
    displayName: 'Nafee'
}

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"></SidebarRow>
            <SidebarRow Icon={EmojiFlagIcon} title="Pages"></SidebarRow>
            <SidebarRow Icon={PeopleIcon} title="Friends"></SidebarRow>
            <SidebarRow Icon={ChatIcon} title="Messenger"></SidebarRow>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"></SidebarRow>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"></SidebarRow>
            <SidebarRow
                Icon={ExpandMoreOutlined}
                title="Marketplace"></SidebarRow>
        </div>
    )
}

export { Sidebar }
