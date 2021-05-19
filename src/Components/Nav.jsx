import React from 'react'
import {NavLink} from supa;
import style from './Nav.module.css'

export default function Nav(){
    return ( 
    <div className={style.bar}> 
    <nav className={style.bar}>
        <NavLink exact activeClassName="active" to='/'>
            <span className={style.letters} >Home</span>
        </NavLink>
        <NavLink activeClassName="active" to= '/characters'> 
        <span className={style.letters}> Find your favorite characters</span>
        </NavLink>
        <NavLink activeClassName="active" to= '/subscribe'>
            <span className={style.letters}>Subscribe</span>
        </NavLink>
    </nav>
    </div>  
    )
}
