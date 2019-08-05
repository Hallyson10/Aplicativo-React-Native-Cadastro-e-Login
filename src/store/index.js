
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import screens from '../../src/pages/TelaCadastroUsuario/Cadastro'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'base',
    storage,
    //whitelist: 'base'
    //blacklist:'base'
};

const persistReduce = persistReducer(persistConfig, rootReducer);
const store = createStore(persistReduce, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);

// export default store
export { store, persistor };