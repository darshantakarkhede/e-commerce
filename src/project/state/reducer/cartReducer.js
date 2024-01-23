import React from 'react'
import { act } from 'react-dom/test-utils'

export default function cartReducer(state=[], action) {
    console.log(action.payload)
    // console.log("state", state.filter(data => {return data.id != action.payload.id}))
  if(action.type === "ADD"){
    if(state.length == 0){
      return[...state, action.payload]
    }else{
      const found = state.some(val => val.id === action.payload.id);
     if(!found){
      return[...state, action.payload]
     }else{
      let val = state.map(value =>{
        return value.id === action.payload.id ? { ...value, qty: action.payload.qty } : value
      })
      return val;
      
     }
    }
     
  }else if(action.type === "REMOVE"){
    return state.filter(data => {return data.id != action.payload.id})
  }else if(action.type === "MINUS"){
      let val = state.map(value =>{
        return value.id === action.payload.id ? { ...value, qty: action.payload.qty } : value
      })
      return val
    
  }else{
    return state
  }
}

