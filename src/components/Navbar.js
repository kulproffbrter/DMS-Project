import React, { useState } from 'react';
import '../component css/Navbar.css';
import { SidebarData } from './SidebarData';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  const handleItemClick = (title) => {
    setSelectedTitle(title);
    showSidebar();
  };

  const location = useLocation();
  const showNavbar = location.pathname;

  return (
    <>
      {showNavbar && (<IconContext.Provider value={{ color: '#1c1b1f' }} className='iconmain'>
        <div className='navbar'>
          <div className='leftbar'>
            <div className='menu-bars-container'>
              <Link to='#' className='menu-bars'>
                <RxHamburgerMenu className='btn-ham' onClick={showSidebar} />
              </Link>
            </div>
            <div className='pagename'>
              <span>{selectedTitle}</span>
            </div>
          </div>
          <div className='rightbar'>
            <div className='icon-account'>
              <BsPersonCircle size={30} />
            </div>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <RxHamburgerMenu style={{ color: 'black' }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path} onClick={() => handleItemClick(item.title)}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>)}
    </>
  );
}

export default Navbar;
