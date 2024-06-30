import { createStore } from 'redux';
import tableReducer from './reducers';

const store = createStore(tableReducer);

export default store;
