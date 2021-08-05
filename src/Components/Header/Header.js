import React, { useState } from 'react'
import '../Header/headerStyles.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../images/websiteHeader.png';
import Menu from '../Menu/Menu';

function Header() {

    const [open, setOpen] = useState(false);

    let menu

    if(open) {
       menu =  <div>
           <Menu />
       </div>
    }



    return (
        <>
        <div>
            <div class='hamburgerMenu'>
                <FaBars onClick={() => setOpen(!open)} class='icon'/>
                <img src={logo} alt='NBHL header design'/>
            </div>
            {menu}
        </div>
        </>

    )
}

export default Header
