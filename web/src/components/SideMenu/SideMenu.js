import React from 'react'
import './SideMenu.css'

const SideMenu = ()=>{
    return(
        <aside classname = 'sidemenu'>
            <div className='sidemenu-button'>
                <span>+</span>
                Novo Chat
            </div>
        </aside>
    )
}

module.exports(SideMenu)