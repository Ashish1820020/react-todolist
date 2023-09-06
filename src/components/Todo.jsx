import React,{useContext} from 'react'
import {con} from '../App'

export default function Todo({element}) {
  const {remove} = useContext(con);
  return (
    <li>
        <input type="checkbox" name="checkbox" id="checkbox"  />
        <p>{element.task}</p>
        <button className='btn-remove' onClick={()=>remove(element)}>Remove</button>
    </li>
   
  )
}
