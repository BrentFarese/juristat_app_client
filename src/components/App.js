import React, { Component } from 'react';
import NavBar from './NavBar';
import ApplicationsTable from './ApplicationsTable';
import TasksTable from './TasksTable';
import EnterApplicationModal from './EnterApplicationModal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col} from 'react-flexbox-grid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Row>
            <Col xs={12}>
              <Row>
               <Col xs={12}>
                  <NavBar />
                  <EnterApplicationModal/>
                </Col>
              </Row>
              <Row>
                <Col lg={6} xs={12}>
                  <ApplicationsTable />
                </Col>
                <Col lg={6} xs={12}>
                  <TasksTable />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </MuiThemeProvider>
      );
  }
}

export default App;
