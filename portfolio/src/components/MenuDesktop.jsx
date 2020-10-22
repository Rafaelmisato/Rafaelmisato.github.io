import React from 'react'
import './MenuDesktop.css'

import MenuDesktopIcons from './elementsComponents/MenuDesktopIcons'
import MenuDesktopClock from './elementsComponents/MenuDesktopClock'

export default props =>
    <div className="menu-desktop">
        <MenuDesktopIcons />
        <MenuDesktopClock />
    </div>
