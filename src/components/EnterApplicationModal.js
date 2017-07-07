import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {toggleModal} from '../actions/actions';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const formStyle = {
	display: 'block'
};

export class EnterApplicationModal extends Component {

  toggleModal(event) {
    event.preventDefault();
    this.props.dispatch(toggleModal());
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={e => this.toggleModal(e)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={e => this.toggleModal(e)}
      />,
    ];

    return (
      <div>
        <Dialog
          title="New Application"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={e => this.toggleModal(e)}
        >
			<form>
	        	<TextField hintText='Enter a New Application Number' style={formStyle}/>
	 			<TextField hintText='Enter a Related Matter'style={formStyle}/>
			</form>        
		</Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	test: console.log(state),
    open: state.open
});

export default connect(mapStateToProps)(EnterApplicationModal);