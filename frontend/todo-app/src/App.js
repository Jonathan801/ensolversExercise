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

  return (
    <>
      <div>
          
      </div>
    
      <div>
          {todoItems ? todoItems.map((item) => 
          {
            return( 
              <TodoItem key={item.id} data={item}></TodoItem>
            );
          }) 
          : "Cargando informacion"}
      </div>

    </>
  );
}

export default App;
