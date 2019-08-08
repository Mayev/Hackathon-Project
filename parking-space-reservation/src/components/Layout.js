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
            parking_data: [],
            employee_data: [],
            car_data: [],
            date_data: [],
            table_data: [],
            table_columns: [{
                name: 'Building',
                selector: 'building',
                sortable: true,
              },
              {
                name: 'Floor Number',
                selector: 'floor',
                sortable: true,
              },
              {
                name: 'Spot Number',
                selector: 'spot',
                sortable: true,
              },
              {
                name: 'Occupied',
                selector: 'occupied',
                sortable: true,
              },
              {
                name: 'Employee Name',
                selector: 'emp_name',
                sortable: true
              },
              {
                name: 'E-Mail',
                selector: 'email',
                sortable: true,
              }
            ],
        }

        this.onDateChange = this.onDateChange.bind(this);
        this.parseParkingData = this.parseParkingData.bind(this);
        this.parseCarData = this.parseCarData.bind(this);
        this.parseEmployeeData = this.parseEmployeeData.bind(this);
        this.parseDateData = this.parseDateData.bind(this);
        this.showTableData = this.showTableData.bind(this);
    }

    componentDidMount() {
        var parking = require('../jsons/parkingSpot.json');
        var car = require('../jsons/car.json');
        var employee = require('../jsons/employee.json');
        var date = require('../jsons/date.json');

        this.parseParkingData(parking);
        this.parseCarData(car);
        this.parseEmployeeData(employee);
        this.parseDateData(date);
    }

    onDateChange(newDate) {
        console.log(newDate)
        this.setState({selected_date: newDate})
        this.showTableData();
    }
/*
    componentDidMount() {
        ParkingData.getParkingSpots().then(results => {
            this.setState({ parking_spots_data: results });
        })
    }
*/
    showTableData() {
        var mydate = new Date(this.state.date_data[0].date);
        console.log(mydate.toDateString());
    }

    parseParkingData(input) {
        for (var i = 0; i < input.length; i++) {
            var obj = input[i];
            this.setState(prevState => ({
                parking_data: [...prevState.parking_data, obj]
            }))
        }
    }

    parseCarData(input) {
        for (var i = 0; i < input.length; i++) {
            var obj = input[i];
            this.setState(prevState => ({
                car_data: [...prevState.car_data, obj]
            }))
        }
    }

    parseEmployeeData(input) {
        for (var i = 0; i < input.length; i++) {
            var obj = input[i];
            this.setState(prevState => ({
                employee_data: [...prevState.employee_data, obj]
            }))
        }
    }

    parseDateData(input) {
        for (var i = 0; i < input.length; i++) {
            var obj = input[i];
            this.setState(prevState => ({
                date_data: [...prevState.date_data, obj]
            }))
        }
    }

    render () {
        console.log(this.state.parking_data)
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