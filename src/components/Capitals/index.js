import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryObject: countryAndCapitalsList[0]}

  cityChanged = event => {
    const selectCityObject = countryAndCapitalsList.filter(
      element => element.id === event.target.value,
    )

    this.setState({countryObject: selectCityObject[0]})
  }

  render() {
    const {countryObject} = this.state
    const {country} = countryObject
    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>Countries and Capitals</h1>
          <div>
            <select onChange={this.cityChanged}>
              {countryAndCapitalsList.map(city => (
                <option value={city.id} key={city.id}>
                  {city.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <h3>{country}</h3>
        </div>
      </div>
    )
  }
}

export default Capitals
