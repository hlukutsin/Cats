
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; 
const targetUrl = 'https://mrsoft.by/tz20/list.json';
const basepath ='https://mrsoft.by/tz20'

export function addCat(result){
  return {
    type: 'ADD_CAT',
    payload: result
  }
}


export function fetchMore(url) {
  let targetUrl = basepath + url
return dispatch => {fetch(proxyUrl + targetUrl) 
  .then(res => res.json()) 
  .then(result => {  
    return dispatch({  
      type: "RECEIVE_MORE", 
      payload: result 
    }); 
  }) 
  .catch(console.log); 
  }
} 
 
export function fetchCats() { 
  return dispatch => { 
    return fetch(proxyUrl + targetUrl) 
      .then(res => res.json()) 
      .then(result => { 
        return dispatch({ 
          isLoaded: true, 
          type: "RECEIVE_CATS", 
          payload: result 
        }); 
      }) 
      .catch(console.log); 
  } 
}

export function addDeleted(id, index, isDelete){
  return {
      type: 'ADD_DELETED',
      index: index,
      id: id,
      isDelete: isDelete
    }
  }

  export function findCat(value){
    return {
        type: 'FIND_CAT',
        txt: value
      }
    }