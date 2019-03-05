import {combineReducers} from 'redux';

// import reducers
import authReducer from './auth';
import aboutReducer from './about';

const rootReducer = combineReducers({  
  auth: authReducer,
  about: aboutReducer
})

export default rootReducer;