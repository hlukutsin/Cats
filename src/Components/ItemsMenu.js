import React, {Component} from 'react'
import Item from './Item'
import {connect} from 'react-redux'
import {addCat}  from '../redux/actions/actions'
import {findCat}  from '../redux/actions/actions'

class ItemsMenu extends Component {
  


  render() {

      let result = null
    if (this.props.state.isLoaded){
      
      result = this.props.state.items.map((cat, index) => {
        if (this.props.state.findText){
          let itemName = cat.name
          let item = itemName.toLowerCase()
          let storeName = this.props.state.findText
          let store = storeName.toLowerCase()
         if(item.includes(store)){
       
      return (
        <Item 
          key={index}
          name={cat.name}
          shortInfo={cat.shortInfo}
          id = {cat.id}
          more = {cat.more}
          index = {index}
          catClick={() => this.props.catClick(cat)}
        />
        )
      }
      } else {
        return (
          <Item 
            key={index}
            name={cat.name}
            shortInfo={cat.shortInfo}
            id = {cat.id}
            more = {cat.more}
            index = {index}
            catClick={() => this.props.catClick(cat)}
          />
          )
      }
      }
    )
  }

    return (
      <div className='itemsMenu'>
        <input onChange={(event) => this.props.findCat(event.target.value)} placeholder='Search'></input>
        {result}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state: state.reducerItems
  }
}
function mapDispatchToProps(dispatch){
  return {
    catClick: (result) => dispatch(addCat(result)),
    findCat: (value) => dispatch(findCat(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemsMenu)