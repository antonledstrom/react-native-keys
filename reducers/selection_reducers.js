import {
    SELECT_KEY_INDEX,
    SELECT_CAPO
} from '../actions/types'; 

const INITAL_STATE = {
    selectedKeyIndex: 0,
    selectedCapo: 7
}; 

// Best practice redux
/**
 *  ... JSX spread attributes
 * If you already have props as an object, and you want to pass it in JSX, you can use ... as a "spread" operator to pass the whole props object. These two components are equivalent:
 *  function App1() {
 *  return <Greeting firstName="Ben" lastName="Hector" />;
 *  }
 *  function App2() {
 *  const props = {firstName: 'Ben', lastName: 'Hector'};
 *  return <Greeting {...props} />;
 *  }
 */

export default (state = INITAL_STATE, action) => { 
    switch (action.type) {
        case SELECT_KEY_INDEX: {
            return {
                ...state,
                selectedKeyIndex: action.payload
            };
        }
        case SELECT_CAPO: {
            return {
                ...state,
                selectedCapo: action.payload
            };
        }
        default:
            return state; 
    }
};
