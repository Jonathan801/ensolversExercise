import React from 'react';

const AddTodoItem = (props) =>{
    const {setTextItem,textItem,addNewToDo} = props;

    return(
    <div>
        <form onSubmit={() => {addNewToDo()}}>
            <label htmlFor="new-todo">
                Que tarea se desea agregar?
            </label>
            <p></p>
            <input
                id="new-todo"
                onChange={(e) => setTextItem(e.target.value)}
                value={textItem}
            />
            <button>
                Add Task
            </button>
        </form>
    </div>
    )
}

export default AddTodoItem