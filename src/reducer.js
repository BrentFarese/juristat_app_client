import { combineReducers } from 'redux';
import toggleAppModal from './reducers/toggleAppModal';

const rootReducer = combineReducers({
	modalState: toggleAppModal
});

export default rootReducer;