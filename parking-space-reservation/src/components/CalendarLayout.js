import React, {Component} from 'react';
import 'moment/locale/it.js';
import { DatePicker } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import '../styles/Calendar.css'

class CalendarLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
        }

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        this.props.onDateChange(this.state.date)
    }

    render () {
        return (
            <div className="container">
                <DatePicker
                    className="date-picker"
                    value={this.state.date}
                    onChange={(jsDate) => this.setState({date: jsDate})}
                    locale="en"
                />
                <button
                    className="submit-date-button"
                    onClick={this.buttonClick}>
                    Submit Selected Date
                </button>
            </div>
        )
    }
}

export default CalendarLayout;