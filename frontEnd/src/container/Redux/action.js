import {
	REQUEST_PROJET_SUCCES,
	REQUEST_PROJET_PENDING,
    REQUEST_PROJET_FAILED} from './constant'

export const requestProjet= () => (dispatch)=>{
  dispatch({type:REQUEST_PROJET_PENDING})
  fetch('localhost:8081/projet')
  .then(data=>dispatch({type:REQUEST_PROJET_SUCCES,payload:data}))
  .catch(error=>dispatch({type:REQUEST_PROJET_FAILED,payload:error}))

}