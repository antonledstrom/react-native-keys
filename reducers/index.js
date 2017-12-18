import { combineReducers } from 'redux';
import keys from './keys_reducer';
import selectedValues from './selection_reducers';
import modal from './modal_reducers'; 

export default combineReducers({
  keys, selectedValues, modal
});
