import React from 'react';
import './Navbar.css'

const Navbar = (prop) =>{
	return (
     <div >
           <div id="navbar">
		     	<div className="navbarItem">ABOUT</div>
		     	<div className="navbarItem">WORK</div>
		     	<div className="navbarItem">SKILLS</div>
		     	<div className="navbarItem">CONTACT</div>
     	    </div>
     </div>
		);
}
export default Navbar;