import React from 'react'
import {combineReducers} from 'redux'
import cartReducer from './cartReducer'

export  const reducers = combineReducers({
    product : cartReducer
})