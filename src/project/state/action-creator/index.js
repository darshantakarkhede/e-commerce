import React from 'react'

export function addToCart(product) {
  return (
    (dispatch)=>{
        dispatch({
            type:"ADD",
            payload:product
        })
    }
  )
}




export function removeFromCart(product) {
    return (
      (dispatch)=>{
          dispatch({
              type:"REMOVE",
              payload:product
          })
      }
    )
  }

  export function minusFromCart(product) {
    return (
      (dispatch)=>{
          dispatch({
              type:"MINUS",
              payload:product
          })
      }
    )
  }
  