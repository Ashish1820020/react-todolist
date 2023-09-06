import React ,{useContext}from 'react'
import Todo from './Todo'

import {conData} from '../App'

export default function Todos() {

  
  const {data} = useContext(conData);

  return (
    <div className='todos-container center'>
      <h3>todo list</h3>
        <div className='todos'>
            <ul>
                {
                   data.map((element)=>{
                  return <Todo key={element.id} element={element}  />
              })
                   
                }
                
            </ul>
         </div>
    </div>
  )
}
