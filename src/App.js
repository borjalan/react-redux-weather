// vendors
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { createStore } from 'redux';

// components
import ForecastExtended from './components/ForecastExtended';
import LocationList from './components/LocationList';

// material-ui
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

// styles
import './App.css';

//constants
const cities = ['Madrid', 'Barcelona', 'Buenos Aires', 'Washington', 'Bogota', 'Mexico'];

const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
    store.dispatch({ type: 'setCity', value: city });
  };

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              ></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {city && <ForecastExtended city={city}></ForecastExtended>}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
