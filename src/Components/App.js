import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemsMenu from './ItemsMenu'
import Main from './Main'
import {fetchCats} from '../redux/actions/actions'
import {addDeleted} from '../redux/actions/actions'

class App extends Component {

  componentDidMount(){
    this.props.fetchCats()
    if(this.props.state){
  }
  }

  render() {
    
    return (
      
      <div className='Wrapper'>
        <header><h1>Cats</h1></header>
        <main>
          <ItemsMenu />
          <Main />
       </main>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    state
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCats: () => dispatch(fetchCats()),
    addDeleted: () => dispatch(addDeleted()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)