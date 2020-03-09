import {combineReducers} from 'redux'
import reducerItems from './reducers/reducerItems'
import counter2 from './reducers/counter2'

export default combineReducers({
  reducerItems, counter2
})