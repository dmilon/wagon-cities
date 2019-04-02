import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setActiveCity } from '../actions/index.js'

class City extends React.Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city)
  }
  render () {
    return (
      <div
        style={{ border: '1px solid white' }}
        className={this.props.flat === this.props.activeCity ? "selected" : ""}
        onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {setActiveCity: setActiveCity },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(City)
