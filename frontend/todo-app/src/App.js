import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import AddTodoItem from "./components/addItem"
import TodoItem from './components/todoItem';

function App() {

  const [todoItems,setTodoItems] = useState(null);
  const [textItem,setTextItem] = useState("");

  useEffect(() => {
    if(!todoItems){        
      fetch("https://todoapp-springboot-postgres.herokuapp.com/api/toDo")
        .then((res) => {
            return res.json();
        })
        .then(data => {
          console.log(data)
          setTodoItems(data)
        })};
  });

  function addNewToDo(){
    fetch("https://todoapp-springboot-postgres.herokuapp.com/api/toDo",{
      method:"POST",
      headers: {
          "content-type" : "application/json"
      },
      body:JSON.stringify({
        description: textItem
      })
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTodoItems([...todoItems,data]);
      setTextItem("");
    })
  }

  function deleteTodo(task){
    const updated = todoItems.filter(itemToDo => itemToDo.id !== task.id);
    setTodoItems([...updated])
  }


  return (
    <>
      <div>
        <AddTodoItem setTextItem={setTextItem} textItem={textItem} addNewToDo={addNewToDo} ></AddTodoItem>
      </div>

      <p></p>

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
