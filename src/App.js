import { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const[inputlist,setInputlist]=useState("");
  const[Items,setItems]=useState([]);
  const itemEvents=(event)=>{
      setInputlist(event.target.value);
  };
  const listOfItem=()=>{
      setItems((olditems)=>{
        return[...olditems,inputlist];
      });
      setInputlist("");
  };
  const deleteItems=(id)=>{
      // console.log("deleted");
      setItems((olditems)=>{
        return olditems.filter((arrElm,index)=>{
            return index !==id;
        })
      })
  }
  return (
    <>
    <div className='main-div'>
      <div className='center-div'>
        <br/>
        <h1>Todo List</h1>
        <br/>
        <input type="text" placeholder='Add a Item' value={inputlist} onChange={itemEvents}/>
        <button onClick={listOfItem}>+</button>
        <ol>
          {/* <li>{inputlist}</li> */}
          {Items.map((itemval,index)=>{
            return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems}/> 
          })}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
