import React, { useContext } from 'react'
import style from "./About.module.css"
import {  counterContext } from '../../Context/Counter.js'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../../redux/counterRedux.js'
export default function About() {
  let {counter}=useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  let Counter=useContext(counterContext)
  console.log('salah');

  return (
    <>
    <button className='btn btn-info' onClick={()=>dispatch(increase())}>+</button>
    <h1>{counter}</h1>
    <button className='btn btn-danger' onClick={()=>dispatch(decrease())}>-</button>
    </>
  )
}
