import {TOGGLE_MODAL} from '../actions/actions';

const initialState = {
	open: false
};

export default function toggleAppModal(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_MODAL:
		return Object.assign({}, state, {
			open: !state.open
		})
		default:
			return state
	}
}