import React, { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
const App = () => {
  const [inputVal,setInputVal]=useState("")
  const [data,setData]=useState([])
  const [edit,setEdit]=useState(null)

  const handleSubmit=(e)=>{
    let val=nanoid();
    e.preventDefault();
    if(edit!==null){
      setData(
        data.map((item)=>
          item.val===edit ? {...item,inputVal:inputVal} : item
        )
      )
       setEdit(null);
    setInputVal("");
    return;
    }
    setData([...data,{val,inputVal}])
    setInputVal("")
  }


  const handleDelete=(val)=>{
       const temp=data.filter((item)=>item.val!==val)
       setData(temp)
  }
  const handleUpdate=(val)=>{
     const item=data.find((item)=>item.val===val)
    setInputVal(item.inputVal)
    setEdit(val)

  }

  return (
    <div className='main'>
      <div className='input_button'>
        <input  value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder='enter a task' type="text"/>
        <button onClick={handleSubmit}>{edit ? 'updata' : 'ADD'}</button>
      </div>
      <div className='content'>

        {
          data && data?.map((item,idx)=>(
         <ul className="ultag" key={item.val}>
  <li>
    {idx + 1}. {item.inputVal}
  </li>

  <button onClick={() => handleUpdate(item.val)}>
    UPDATE
  </button>

  <button onClick={() => handleDelete(item.val)}>
    DELETE
  </button>
</ul>
          ))
        }

      </div>
    </div>
  )
}

export default App