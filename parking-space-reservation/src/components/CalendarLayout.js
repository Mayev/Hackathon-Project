import React, {Component} from 'react';
import 'moment/locale/it.js';
import Calendar from 'react-calendar';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'rc-datepicker/lib/style.css';
import '../styles/Calendar.css'


class CalendarLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        }
    }


    onChange = value => this.props.onDateChange(value)

    render () {
        const { value } = this.state;

        return (
            <div className="container">
                <Calendar
                    onChange={ this.onChange }
                    value={ value }
                />
                <a href="https://www.google.com/maps" target="_blank">Map of a building</a>
            </div>
        )
    }
}

export default CalendarLayout;