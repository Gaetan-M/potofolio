import React from 'react';
import './skill.css'
import {frontEnd,backEnd,database,network,others} from '../../components/constant/constant.js'

const skills=['frontEnd','backEnd','Network','Others']
class Skill extends React.Component{

	contructor(){
     this.state={
     	enabled:false
     }
	}
    render(){

      const display=()=>{
      	
      }
	return (
		<div id="skill-Component">
			<div id="skill">
	          { 	
               skills.map((key,id)=> 
	          	<div className="skillItem" key={key}>{skills[id]}</div>
	          )}
	        </div>
	        <div id="frontEnd-skill">
	        	{
	        		frontEnd.map((key,id)=>{
	        			return(
	        				<div key={key} className="skill">
	        					<p>{frontEnd[id].name}</p>
	        				</div>)
	        		})
	        	}
	        </div>	        
	        <div id="backEnd-skill">
	        	{
	        		backEnd.map((key,id)=>{
	        			return(
	        				<div key={key} className="skill">
	        					<p>{backEnd[id].name}</p>
	        				</div>)
	        		})
	        	}
	        </div>	        
	        <div id="network-skill">
	        	{
	        		network.map((key,id)=>{
	        			return(
	        				<div key={key} className="skill">
	        					<p>{network[id].name}</p>
	        				</div>)
	        		})
	        	}
	        </div>	        
	        <div id="others-skill">
	        	{
	        		others.map((key,id)=>{
	        			return(
	        				<div key={key} className="skill">
	        					<p>{others[id].name}</p>
	        				</div>)
	        		})
	        	}
	        </div>
		</div>
		)
}
}
export default Skill;