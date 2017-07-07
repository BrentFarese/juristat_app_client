import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {toggleModal} from '../actions/actions';
import store from '../store';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
 export class NavBar extends Component {

  toggleModal(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
    console.log(`The toggleModal action dispatched.`);
    console.log(store.getState());
  }

  render() {
   return (
    <AppBar
    title={<span style={styles.title}>Dashboard</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<FlatButton label="Enter a New Application" onTouchTap={e => this.toggleModal(e)} />}
    />
    );
 }
};

export default connect()(NavBar);

