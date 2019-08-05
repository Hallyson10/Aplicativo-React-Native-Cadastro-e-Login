import { combineReducers } from 'redux'
import Auth_Reducer from './Auth_Reducer'
import Profile_reducer from './Profile_Reducer';
import Register_Reducer from './Register_Reducer'
import VagasReducer from './PropertiesVagas_Reducer'
export default combineReducers({
  Auth: Auth_Reducer,
  Profile: Profile_reducer,
  Register: Register_Reducer,
  Vagas: VagasReducer
});