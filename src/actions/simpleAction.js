import axios from "axios";

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}

export const handleQuestion = () => dispatch => {
  var payload = {'text': 'tell me a joke'}
  axios.post('http://localhost:8000/api/chatterbot/', payload).then((response)=>{
    console.log(response)
    dispatch(updateResponse(response.data));
  }).catch( (error) => {
      console.log("error getting response");
      console.log(error);
      // this.setState({
      //   error: error.message
      // });
    } );
}

// export function loadResponse() {
//   var payload = {'text': 'tell me a joke'}
//   return (dispatch)=>{
//     return axios.post('http://localhost:8000/api/chatterbot/', payload).then((response)=>{
//       console.log(response)
//       dispatch(updateResponse(response.data));
//     })
//   }
// }

export function updateResponse(data){
  return {
    type: "UPDATE_RESPONSE",
    response: data,
  }
}
