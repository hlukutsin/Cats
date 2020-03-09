import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchMore} from '../redux/actions/actions'

class Main extends Component {

  render() {
    return (
      <div className='main'>
        
        <div className='leftBar'>
        {this.props.state.activeCat.pic?
          <img src={`https://mrsoft.by/tz20${this.props.state.activeCat.pic}`} alt={`${this.props.state.activeCat.name}`} />
          : <h1>Please click on the cat</h1>
        }
        </div>
        <div className='rightBar'>
          <h2>{this.props.state.activeCat.name}</h2>
          <h4>{this.props.state.activeCat.shortInfo}</h4>
          <p>{this.props.state.activeCat.about}</p>
          </div>
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
  fetchMore: () => dispatch(fetchMore()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)