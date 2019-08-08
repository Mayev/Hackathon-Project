import React from 'react';
import './App.css';
import Table from './components/Table';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
			<div className="App-header"><h1 className="App-title">Parking Space Reservation System</h1></div>
			<div className="App-content">
        <div className="App-table">
          <Table>
            
          </Table>
        </div>
        <div className="App-calendar">
          <Calendar>

          </Calendar>
        </div>
			</div>
		</div>
  );
}

export default App;
