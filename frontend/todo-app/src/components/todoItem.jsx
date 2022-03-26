import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
  const [todoItem,setTodoItem] = useState(props.data);
  const [isChanged,setIsChanged] = useState(false)

  useEffect(() =>{
    if(isChanged){
        fetch(`http://localhost:8080/api/toDo/${todoItem.id}`,{
            method:"PUT",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(todoItem)
        })
        .then(res =>{
            return res.json()
        })
        .then(data =>{
            setIsChanged(false);
            setTodoItem(data);
        })
    };
    //console.log(JSON.stringify(todoItem))
  },[todoItem,isChanged])

  function updateTask(e){
    setIsChanged(true);
    setTodoItem({...todoItem,description:e.target.value})
  }

  return (
    <div>
        <input type="checkbox" checked={todoItem.completed} onChange={()=>
        {
            setIsChanged(true);
            setTodoItem({...todoItem,completed:!todoItem.completed})
        }} />
        <input type="text" value={todoItem.description} onChange={updateTask}></input>
    </div>
  )
}

export default TodoItem
