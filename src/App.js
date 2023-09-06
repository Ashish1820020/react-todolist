import './App.css';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import Todos from './components/Todos';
import { useState,createContext } from 'react';

const con = createContext();
const conData = createContext();

function App() {


  const [text,setText] = useState('')
  const [data,setData] = useState([
    {id: 1,
      checkbox: 'false',
      task: 'job'
    },
    {
      id: 2,
      checkbox: 'false',
      task: 'Read'
    },
    {
      id: 3,
      checkbox: 'false',
      task: 'Write'
    }]);

  function change(e){
    let v=e.target.value;
    setText(v);
  }

  function addTodos(){
    if(text==='') alert("Cannot add null")
    else{
      let id = (data[data.length-1].id)  + 1;

    let obj ={
      id: id,
      checkbox: 'false',
      task: text
    }
    setData([...data, obj]);
      
    }
    
  }
  function remove(e){
   

    let d=data.filter((element)=>{
      return element.id!==e.id;
    })
    setData(d);
  }


  return (
    <con.Provider value={{remove,addTodos,change}}>
    <conData.Provider value={{text,data}}>
    <div className="App">
      <Header/>
      <AddTodos text={text}/>
      <Todos Data={data}/>
    </div>
    </conData.Provider>
    </con.Provider>
  );
}

export default App;
export {con,conData};

