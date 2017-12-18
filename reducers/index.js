import { combineReducers } from 'redux';
import keys from './keys_reducer';
import selectedValues from './selection_reducers';

export default combineReducers({
  keys, selectedValues
});
