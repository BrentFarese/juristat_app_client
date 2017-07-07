import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableHeaderStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '35 px'
};

 const tableData = [{
    applicationNo: 'Test',
    matterNo: 'Test',
    status: 'Completed',
    tasks: 'Active',
    delete: 'Delete Button'
  }];

export default class ApplicationsTable extends Component {

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height='300px'
          multiSelectable={true}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn colSpan='5' tooltip='Super Header' style={tableHeaderStyle}>
                My Applications
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn>Application No.</TableHeaderColumn>
              <TableHeaderColumn>Matter No.</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Add A Task</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            stripedRows={true}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.applicationNo}</TableRowColumn>
                <TableRowColumn>{row.matterNo}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.tasks}</TableRowColumn>
                <TableRowColumn>{row.delete}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}