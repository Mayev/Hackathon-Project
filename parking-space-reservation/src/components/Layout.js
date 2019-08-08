import React, {Component} from 'react';
import TableLayout from './TableLayout';
import CalendarLayout from './CalendarLayout';
import ParkingData from '../data/ParkingData';
import '../styles/Layout.css'

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected_date: "",
            parking_spots_data: [],
            table_data: [{ id: 1, title: 'Conan the Barbarian', year: '1982' }],
            table_columns: [{
                name: 'Title',
                selector: 'title',
                sortable: true,
              },
              {
                name: 'Year',
                selector: 'year',
                sortable: true,
                right: true,
              },],
        }

        this.onDateChange = this.onDateChange.bind(this)
    }

    onDateChange(newDate) {
        console.log(newDate)
        this.setState({selected_date: newDate})
    }
/*
    componentDidMount() {
        ParkingData.getParkingSpots().then(results => {
            this.setState({ parking_spots_data: results });
        })
    }
*/

    componentDidMount() {
        parseParkingData();
        parseCarData();
        parseEmployeeData();
        parseDateData();
    }

    render () {
        var data = require('../jsons/parkingSpot.json');

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];

            console.log("ID: " + obj.parkingSpotId);
            console.log("number: " + obj.number);
            console.log("occ: " + Boolean(obj.occupied));
            console.log("IDemp: " + parseInt(obj.employeeIdUsing));
        }

        return (
            <div className="container">
                <div className="table-container left">
                    <TableLayout
                        data={ this.state.table_data }
                        columns={ this.state.table_columns }
                    />
                </div>
                <div className="calendar-container right">
                    <CalendarLayout
                        selected_date={ this.state.selected_date }
                        onDateChange={ this.onDateChange }
                    />
                </div>
            </div>
        )
    }
}

export default Layout;