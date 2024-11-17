 "use client"
 
 //components/Counter.tsx
 import{useSelector,useDispatch}from'react-redux';
 import{increment,decrement}from'../store/counterSlice';
 const Counter=()=>{
 const count=useSelector((state: any)=>state.counter.value);
 const dispatch=useDispatch();
 return(
 <div className='text-center text-top-100px '>
 <h1>Count:{count}</h1>
 <button className='bg-red-400 p-2 rounded text-white ' onClick={()=>dispatch(decrement())}>Decrement</button>
 <button className='bg-green-400 p-2 rounded-md text-white' onClick={()=>dispatch(increment())}>Increment</button>
 </div>
 );
 };
 export default Counter