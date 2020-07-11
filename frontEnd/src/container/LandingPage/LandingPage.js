import React,{Component}from 'react';
import Typist from 'react-typist'
import Navbar from '../../components/Navbar/Navbar.js'
import './LandingPage.css'

class LandingPage extends Component{
  
  constructor(props){
  	super(props)
    	this.state={
    		welcome:[
	    		" Ngniawo Mopi Gaetan Daryl",
	            " Douala, cité des palmiers",
	            "full-stack javascript developer and network administration"
            ]
    	}
  }
  
 
  componentDidMount(){

  }
  render(){
		return (
		    <div>
			    <div id="LandingPage">
			     	<Navbar />
			     	<div id="textArea">
				     	<Typist avgTypingDelay={70} startDelay={1500}>
				     		{
	                        this.state.welcome.map((key,id)=>{
	                        	return(
				     			<div key={key} className="element" >
				     		        {this.state.welcome[id]}
				     			</div>
	                        		)
	                        })
				     	   	}			            
	                    </Typist>
			     	</div>
			    </div>
		    </div>
	    )
    }
}
export default LandingPage;