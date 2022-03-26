import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import TodoItem from './components/todoItem';

function App() {

    const [todoItems,setTodoItems] = useState(null);

  useEffect(() => {
    if(!todoItems){        
      fetch("http://localhost:8080/api/toDo")
        .then((res) => {
            return res.json();
        })
        .then(data => {
          console.log(data)
          setTodoItems(data)
        })};
  });

  function addNewToDo(){
    fetch("http://localhost:8080/api/toDo",{
      method:"POST",
      headers: {
          "content-type" : "application/json"
      },
      body:JSON.stringify()
    })
  }

  function deleteTodo(task){
    const updated = todoItems.filter(itemToDo => itemToDo.id !== task.id);
    setTodoItems([...updated])
  }


  return (
    <>
      <div>
          <button onClick={addNewToDo}> Add new Todo</button>
      </div>
      <div>
          {todoItems ? todoItems.map((item) => 
          {
            return( 
              <TodoItem key={item.id} data={item} emitDeleteToDo={deleteTodo}></TodoItem>
            );
          }) 
          : "Cargando informacion"}
      </div>

    </>
  );
}

export default App;
