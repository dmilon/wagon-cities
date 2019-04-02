// TODO: add and export your own actions
import cities from '../cities'

const setCities = () => {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

const setActiveCity = (city) => {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  }
}

export { setCities, setActiveCity }
