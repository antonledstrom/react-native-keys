import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from '../actions/types'; 

const INITAL_STATE = {
    chordsModalIsOpen: false
};

export default (state = INITAL_STATE, action) => { 
    switch (action.type) {
        case OPEN_CHORDS_MODAL:
        case CLOSE_CHORDS_MODAL: {
            return { chordsModalIsOpen: action.payload };
        }
        default:
            return state; 
    }
};
