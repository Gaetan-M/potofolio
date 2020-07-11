import React from 'react';
import {connect} from 'react-redux'
import Navbar from '../../components/Navbar/Navbar.js'
import Projet from '../../components/Projet/Projet.js'
import About from '../../components/About/About.js'
import Contact from '../../components/Contact/Contact.js'
import Skill from '../Skills/Skill.js'
import LandingPage from '../LandingPage/LandingPage.js'
import {requestProjet} from '../Redux/action'
import './App.css'
    const mapStateToProps= (state)=> {
        console.log('state',state)
    	return{
    		projets:state.requestProjet.projets,
    		isPending:state.requestProjet.isPending
    	}
    }
    const mapDispatchToProps=(dispatch)=>{
        console.log('dispatch',dispatch)
    	return{
    		onRequestProjet:()=>dispatch(requestProjet())
    	}
    }

class App extends React.Component{

    constructor(props){
    	super(props)

    }
	render(){
        console.log('props',this.props)
      const {projets,isPending}=this.props;
		return (
			<div id ="app">
				<LandingPage/>
				<About/>
                <Skill />
				<Projet projets={projets}/>
                <Contact />
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
