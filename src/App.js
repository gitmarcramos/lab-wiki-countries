import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar.component/Navbar';
import CountriesList from './components/CountriesList.component/CountriesList';
import CountryDetails from './components/CountryDetails.component/CountryDetails';
import countries from './countries.json';


class App extends React.Component {
  state = {
    countries: [...countries],
  };

  render() {
    return (
      <div className="App">
        <Navbar title="Lab - Wiki Countries" />
        <main>
          <Switch>
            {/* HERE NEED TO PASS THE PROPS */}
            {/* <Route exact path="/" component={CountriesList}/> */}
            <CountriesList data={this.state.countries} />

            <Route path="/country/:id" component={CountryDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
