
const initialState = {
  isLoaded: false,
  activeCat: false,
  findText: "",
  items: []
}

export default function reducerItems(state = initialState, action) {
  switch(action.type){
    case 'RECEIVE_CATS':
      return {
        ...state,
        isLoaded: true,
        basepath: action.payload.basepath,
        items: action.payload.data.map((item)=>{
          return {
              id: item.id,
              name: item.name,
              shortInfo: item.shortInfo,
              more: item.more,
              isDelete: false
          }
      })
    }
      case 'ADD_CAT':
      return {
        ...state,
        activeCat: action.payload
      }
      case "RECEIVE_MORE":
        return     {  ...state,
          activeCat: {
            name: state.activeCat.name,
            shortInfo: state.activeCat.shortInfo,
            about: action.payload.bio,
            pic: action.payload.pic
          }}
          case 'ADD_DELETED':
           let arr = [...state.items]
           let elem = arr.splice(action.index,1)
           elem = elem[0]
           elem = {
             ...elem,isDelete: !action.isDelete,
             time: new Date().toLocaleString()}
             if(!action.isDelete){
           arr.push(elem)} else {
            arr.unshift(elem)
           }
          return { ...state,
          items: arr
          }
        case 'FIND_CAT':
          return { ...state,
            findText: action.txt
          }
      default:
        return state 
  }
}
