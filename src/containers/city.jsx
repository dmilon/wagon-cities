import React from 'react'

class City extends React.Component {
  render () {
    return (
      <div style={{ border: '1px solid white' }}>{this.props.city.name}</div>
    )
  }
}

export default City
