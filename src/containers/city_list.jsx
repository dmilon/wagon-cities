import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCities } from '../actions'
import City from './city'

class CityList extends React.Component {
  componentWillMount () {
    this.props.setCities()
  }
  render () {
    return (
      <div className='cities'>
        {this.props.cities.map(city => <City key={city.name} city={city} />)}
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  )
}

function mapStateToProps (state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList)
