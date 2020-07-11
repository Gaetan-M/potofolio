import React from 'react';
import './contact.css'
const Contact = () =>{

	return (
	<div id="contact">
	    <div id="container">
	     	<div className="title">Contact Me</div>
	     	<div id="text">Lorem ipsum dolor sit amet, consectetur
	     	 adipisicing elit. Ducimus accusantium sunt expedita consectetur
	     	  explicabo v
	     	</div>
	     	<div id="socialIcons">
	         <div id="google"></div>
	         <div id="link"></div>
	         <div id="facebook"></div>
	         <div id="discord"></div>
	     	</div>
	     	<div id="address">Douala,Cité des palmiers</div>
	     	<div id="inputBox">
	          <input type="text" placeholder="Email Address" className="input"/>
	          <textarea name="message" id=""  placeholder="Your message" className="input" cols="30" rows="10"></textarea>
	          <input type="button" value="Send message" id="button"/>
	     	</div>
	    </div>
{	    	
	// <div id="cool">
	// 	     	<div>Contact</div>
	// 	     	<div>Full stack web developer</div>
	//      	</div>
	     }
    </div>
		)
}

export default Contact;