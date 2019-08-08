import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import '../styles/Table.css'

class TableLayout extends Component {
    constructor(props) {
        super(props);
    }

    render () {
/*
        this.props.data.array.forEach(element => {
            if (element.occupied === true) {

            }
        });
*/
        return (
            <div className="container">
                <DataTable
                    className="table"
                    title="Parking Spaces"
                    columns={ this.props.columns }
                    data={ this.props.data }
                    selectableRows
                    onRowSelected={ this.selectRow }
                />
            </div>
        )
    }
}

export default TableLayout;