import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
  const { emitDeleteToDo } = props;
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
    },[todoItem,isChanged])

    function deleteToDo(){
        fetch(`http://localhost:8080/api/toDo/${todoItem.id}`,{
            method:"DELETE",
            headers: {
                "content-type" : "application/json"
            }
        })
        .then(data =>{
            emitDeleteToDo(todoItem)
        })
    }


  return (
    <div>
        <input type="checkbox" checked={todoItem.completed} onChange={()=>{
            setIsChanged(true);
            setTodoItem({...todoItem,completed:!todoItem.completed})
        }} />

        {todoItem.completed ? (
            <span style={{textDecoration:"line-through"}}>{todoItem.description}</span>
        ) : (
            <input type="text" value={todoItem.description} onChange={(e)=>{
                setIsChanged(true);
                setTodoItem({...todoItem,description:e.target.value})
            }}></input>
        )
        }
        <span style={{marginLeft:"0.2rem" , cursor:"pointer"}} onClick={deleteToDo}>🗑️</span>
    </div>
  )
}

export default TodoItem
