import React from 'react'
import './SectionMain.css'

import MenuDesktop from './MenuDesktop'
import MenuLarge from './MenuLarge'
import ContentHome from './ContentHome'

export default props =>
    <section className="main">
        <MenuDesktop />
        <MenuLarge />
        <ContentHome />
    </section>