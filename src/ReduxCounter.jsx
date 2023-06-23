import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Reset } from './CounterSlice';

export default function ReduxCounter() {
    const value = useSelector((state)=>state.Counter.initialValue);
    const dispatch = useDispatch();
  return (
    <div className=" bg-gray-700 grid  place-items-center h-[100vh]">
    <div className=" border-2 border-white h-56 aspect-video grid grid-rows-2 
                                                                     grid-cols-[1fr_1fr_1fr]">
       
       <button onClick={()=>dispatch(Increment())} className="focus:outline-none border text-[4rem] text-white grid 
                                                                   bg-[#80808033] place-items-center">
       +
       </button>
       <div className="border text-[5rem] text-white grid place-items-center">{value}</div>
       <button onClick={()=>dispatch(Decrement())} className="focus:outline-none border text-[5rem] text-white 
                                                        bg-[#80808033] grid place-items-center">
       -
       </button><div></div>
       <button onClick={()=>dispatch(Reset())} className="focus:outline-none border text-[3rem] text-white grid 
                                                                   bg-[#80808033] place-items-center">
       Reset
       </button>
   </div>
  </div>
  )
}
