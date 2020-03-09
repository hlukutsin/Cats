import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMore} from '../redux/actions/actions'
import {addDeleted} from '../redux/actions/actions'

class Item extends Component {
  
  render() {
    return (
      <>
      {!this.props.state.items[this.props.index].isDelete?
    <div className='item'>
      <div  onClick={() =>{return (this.props.catClick(),this.props.fetchMore(this.props.more))} } >
        <h3>{this.props.name}</h3>
        <h4>{this.props.shortInfo}</h4>
      </div>    
        <button className='btnClose' onClick={()=>{this.props.addDeleted(this.props.id, this.props.index, this.props.state.items[this.props.index].isDelete)}}>❌</button>
    </div>
  :<div className='itemDel'>
    <div>
      <h3>DELETED </h3>
      <h3>{this.props.name}</h3>
      <h4>{this.props.shortInfo}</h4>
      <h4>Deleted at {this.props.state.items[this.props.index].time}</h4>
    </div>    
      <button className='btnRestore' onClick={()=>{this.props.addDeleted(this.props.id, this.props.index, this.props.state.items[this.props.index].isDelete)}}>✔</button>
  </div> }
      </>
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
    fetchMore: (res) => dispatch(fetchMore(res)),
    addDeleted: (id, index, isDelete) => dispatch(addDeleted(id, index, isDelete)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)