import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setActiveCity } from '../actions/index.js'

class City extends React.Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city)
  }
  render () {
    let classes = "city list-group-item"
    if (this.props.city === this.props.activeCity)  classes += "selected"
    return (
      <div
        style={{ border: '1px solid white' }}
        className={classes}
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
