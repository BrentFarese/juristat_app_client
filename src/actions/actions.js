export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
	type: TOGGLE_MODAL
});

export const ENTER_APPLICATION = 'ENTER_APPLICATION';
export const enterApplication = (applicationNo, matterNo) => ({
	type: ENTER_APPLICATION,
	applicationNo,
	matterNo
});