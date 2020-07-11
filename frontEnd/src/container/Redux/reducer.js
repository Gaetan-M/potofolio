import {
	REQUEST_PROJET_SUCCES,
	REQUEST_PROJET_PENDING,
    REQUEST_PROJET_FAILED} from './constant'

    const initialStateProjet={
    	projets:[],
    	isPending:true
    }

    export const requestProjet=(state=initialStateProjet,action={})=>{
    	switch(action.type)
    	{
    		case REQUEST_PROJET_PENDING:
    		return Object.assign({},state,{isPending:true})
    		break;
    		case REQUEST_PROJET_SUCCES:
    		return Object.assign({},state,{projets:action.payload, isPending:false})
    		break;
    		case REQUEST_PROJET_FAILED:
    		return Object.asssign({},state,{error:action.payload})
    		default:
    		return state
    	}
    }