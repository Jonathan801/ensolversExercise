import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';

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
    <div>
        {todoItems ? todoItems.map((item) => {
          return( 
          <Fragment key={item.id}>
            <input type="checkbox" checked={item.completed} onChange={} />
            <span>{item.description}</span>
          </Fragment>
          );
        }) 
        : "Cargando informacion"}
    </div>
  );
}

export default App;
