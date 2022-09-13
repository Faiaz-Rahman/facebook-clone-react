import React from 'react'
import { Avatar } from '@material-ui/core'

import './SidebarRow.css'

type Props = {
    title: string
    src?: string
    Icon?: React.ComponentType
}

const SidebarRow: React.FC<Props> = ({ title, src, Icon }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h5>{title}</h5>
        </div>
    )
}

export { SidebarRow }
