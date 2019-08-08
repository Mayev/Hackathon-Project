import React, {Component} from 'react';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    document.title = "Parking Reservations";
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Parking Space Reservation System</h1>
        </div>
        <div className="App-content">
          <div className="content-layout">
            <Layout></Layout>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
