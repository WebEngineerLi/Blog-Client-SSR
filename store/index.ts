import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducers, { initState } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducers)

const useStore = () => {
  const store = createStore(persistedReducer, initState, composeWithDevTools())
  const persistor = persistStore(store)
  return {
    store,
    persistor,
  }
}
export default useStore;