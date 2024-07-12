import { legacy_createStore as createStore, combineReducers } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/authSlice'

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  app: changeState, 
  auth: authReducer,
})

const store = createStore(rootReducer)
export default store
