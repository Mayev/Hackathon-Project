import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import '../styles/Table.css'
import Layout from './Layout';

const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('This data should be updated in json', state.selectedRows);
    

  };
class TableLayout extends Component {
    constructor(props) {
        super(props);
    }
    

    render () {
        return (
            <div className="container">
                <DataTable
                    className="table"
                    title="Parking Spaces"
                    columns={ this.props.columns }
                    data={ this.props.data }
                    selectableRows
                    highlightOnHover
                    onRowSelected = {handleChange}
                />
            </div>
        )
    }
}

export default TableLayout;