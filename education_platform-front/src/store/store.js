import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import { combineReducers} from 'redux'
import thunk from 'redux-thunk';
import reducers_1 from '../reducers/Userreducer.js';
import reducers_2 from '../reducers/CourseReducer.js';
import reducers_3 from '../reducers/videoReducer.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose a storage method (e.g., local storage)

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage,     // Storage method (e.g., local storage)
  // Optionally, you can whitelist specific reducers to be persisted
  // whitelist: ['user', 'course'],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, combineReducers({
  user: reducers_1,    // Reducer for user-related state
  subject: reducers_2,  // Reducer for course-related state
  video: reducers_3,  // Reducer for videos-related state
}));

// Configure the Redux store with reducers and middleware
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: [thunk],      // Middleware for handling asynchronous actions (e.g., API calls)
});

// Create a persistor object to persist and rehydrate the store
const persistor = persistStore(store);

export { store, persistor };
