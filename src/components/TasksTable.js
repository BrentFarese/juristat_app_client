import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Row, Col} from 'react-flexbox-grid';

const tableHeaderStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '35 px'
};

 const tableData = [{
    applicationNo: 'Test',
    matterNo: 'Test',
    activeTasks: 'True',
    status: 'Completed'  
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
                <TableHeaderColumn colSpan='4' tooltip='Super Header' style={tableHeaderStyle}>
                  My Tasks
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn>Application No.</TableHeaderColumn>
                <TableHeaderColumn>Matter No.</TableHeaderColumn>
                <TableHeaderColumn>Active Tasks</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              stripedRows={true}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.applicationNo}</TableRowColumn>
                  <TableRowColumn>{row.matterNo}</TableRowColumn>
                  <TableRowColumn>{row.activeTasks}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
          </Table>
      </div>
    );
  }
}