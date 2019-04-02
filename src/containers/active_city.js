import React from 'react'
import { connect } from 'react-redux'

class ActiveCity extends React.Component {
  render () {
    if (this.props.activeCity) {
      const image_url = `https://www.lewagon.com/api/v1/cities/${this.props.activeCity.slug}/cover?width=1200`
      return (
        <div className='active-city'>
          <h3>{this.props.activeCity.name}</h3>
          <p>{this.props.activeCity.address}</p>
          <img src={image_url} width='100%' />
        </div>
      )
    }
    return (
      <div className='active-city'>Hello from ActiveCity</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { activeCity: state.activeCity }
}

export default connect(mapStateToProps)(ActiveCity)
