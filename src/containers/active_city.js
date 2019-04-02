import React from 'react'
import { connect } from 'react-redux'

class ActiveCity extends React.Component {
  render () {
    if (!this.props.activeCity) {
      return (
        <div className='active-city'>
          <p>Select a city...</p>
        </div>
      )
    }
    const imageUrl = `https://www.lewagon.com/api/v1/cities/${this.props.activeCity.slug}/cover?width=1200`

    return (
      <div className='active-city'>
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={imageUrl} width='100%' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { activeCity: state.activeCity }
}

export default connect(mapStateToProps)(ActiveCity)
