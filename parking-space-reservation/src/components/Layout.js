import React, {Component} from 'react';
import TableLayout from './TableLayout';
import CalendarLayout from './CalendarLayout';
import ParkingData from '../data/ParkingData';
import '../styles/Layout.css'

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected_date: Date(),
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
                name: 'Parking Space Number',
                selector: 'spot_number',
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
        this.createTableData = this.createTableData.bind(this);
        this.compare = this.compare.bind(this)
    }

    componentDidMount() {
        ParkingData.getParkingSpots().then(result => {
			this.setState({parking_data: result});
        });
        ParkingData.getEmployees().then(result => {
			this.setState({employee_data: result});
        });
        ParkingData.getCars().then(result => {
			this.setState({car_data: result});
        });
        ParkingData.getDate().then(result => {
			this.setState({date_data: result});
		});
    }

    onDateChange(newDate) {
        newDate = newDate.toISOString().slice(0,10);
        this.setState({selected_date: newDate})
        this.createTableData();
    }

    compare(a, b) {   
        return (a<b?-1:(a>b?1:0));  
    }
/*
    componentDidMount() {
        ParkingData.getParkingSpots().then(results => {
            this.setState({ parking_spots_data: results });
        })
    }
*/
    createTableData() {
        var myDate = this.state.date_data[0].date;

        var table_log = []
        var i = 0;
        this.state.parking_data.forEach(spot => {
            table_log[i] = {};
            table_log[i] = {'building': spot.building};
            table_log[i]['floor'] = spot.floor;
            table_log[i]['spot_number'] = spot.number;
            this.state.date_data.forEach(date => {
                if (String(spot.parkingSpotId).valueOf == String(date.parkingSpotId).valueOf) {
                    console.log(myDate);
                    console.log(String(this.state.selected_date))
                    if (myDate === String(this.state.selected_date.slice(0,10))) {
                        table_log[i]['occupied'] = "TRUE";
                    } else {
                        table_log[i]['occupied'] = "FALSE";
                    }
                } else {
                    table_log[i]['occupied'] = "FALSE";
                }
            });
            i++;
        });
        this.setState({table_data: table_log});
        console.log(this.state.table_data)
    }

    render () {
        console.log(this.state.parking_data)
        console.log(this.state.selected_date)
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