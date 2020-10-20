import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Departures from './components/Departures';
import { fetchStations, fetchDepartures } from './API'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      suggestions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectStation = this.handleSelectStation.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    fetchStations(this.state.search)
      .then(res => {
        this.setState({
          suggestions: res.ResponseData
        })
      })
  }

  handleSelectStation(event) {
    this.setState({ station: event.target.name })
    fetchDepartures(event.target.id)
      .then(res => {
        this.setState({
          departures: res.ResponseData
        })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Searchbar
            name="search"
            value={this.state.search}
            handleChange={this.handleChange}
            handleSelectStation={this.handleSelectStation}
            suggestions={this.state.suggestions}
          />
          {this.state.station && <Departures stationName={this.state.station} departures={this.state.departures} />}
        </div>
      </Router>
    );
  }

}

export default App;
