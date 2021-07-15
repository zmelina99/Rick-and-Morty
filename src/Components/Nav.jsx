import React from 'react'
import {Link} from 'react-router-dom';
import style from './Nav.module.css'

export default function Nav(){
    return ( 
    <div className={style.bar}> 
    <nav className={style.bar}>
        <Link style={{ textDecoration: 'none' }} exact  to='/' >
            <img className={style.logo} src={'https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABddiw4GEUq76B3fmiI7r6NF-GrWeEf99MjwKrfixFKM4B4o1uuitcgbuBNa3n04L5GSamUi2vex4adduBV-S2XGERxn29-ffvoRv.png?r=a6e'} alt=''/>
        </Link >
        <Link style={{ textDecoration: 'none'}}  to= '/characters'> 
        <span className={style.letters} > Find your favorite characters</span>
        </Link>
        <Link style={{ textDecoration: 'none'}}  to= '/subscribe'>
            <span className={style.letters} >Subscribe</span>
        </Link >
    </nav>
    </div>  
    )
}
