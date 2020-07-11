import React from 'react';
import './projet.css'

 const projets=[
   {
   	title:'Intralink',
   	description:'la description',
   	imageUrl:''
   },  
   {
  	title:'smartbrain',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'robotfriend',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'Calculator',
   	description:'la description',
   	imageUrl:''
   },  
   {
   	title:'Todolist',
   	description:'la description',
   	imageUrl:''
   }
 ]
const Projet = () =>{

	return (
     
    <div>
        <div className="title">PROJET</div>
	    	<div id="projetList">
	    	{
	    		projets.map((id,index)=>{
	    			return(
			            <div id={projets[index].title} key={id}>
				    		<div  className="projetImage"></div>
				    		<div>{projets[index].title}</div>
				    	</div>

	    		    )
	    		})
	    	}
	    	
	    </div>	
    </div>
		)
}

export default Projet;