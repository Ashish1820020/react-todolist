import React,{useContext} from 'react'
import {con,conData} from '../App'

export default function AddTodos() {

  const {addTodos,change} = useContext(con);
  const {text} = useContext(conData);

    function submit(e){
        e.preventDefault();
    }
  return (
   <form className='add center' onSubmit={submit}>
     <input type='text' value={text} onChange={change} className='input' placeholder='Enter Items' />
      <button id='btn' onClick={addTodos}>Add</button>
   </form>
  )
}
