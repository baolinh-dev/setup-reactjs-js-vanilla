import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import từ redux-devtools-extension
import userReducer from './reducers/userReducer';
import hobbyReducer from './reducers/hobbyReducer';

const rootReducer = combineReducers({
    user: userReducer,
    hobby: hobbyReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(), // Sử dụng composeWithDevTools để kết hợp Redux DevTools Extension
);

export default store;
