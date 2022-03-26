import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const AddTodoItem = (props) =>{
    const [todoItem,setTodoItem] = useState(null);
    const [textItem,setTextItem] = useState("");

    return(
    <div>
        <form onSubmit={(e) => {
            if (textItem.length === 0) {
                return;
            }
            console.log(textItem)
        }}>
            <label htmlFor="new-todo">
                Que tarea se desea agendar?
            </label>
            <input
                id="new-todo"
                onChange={(e) => setTextItem(e.target.value)}
                value={textItem}
            />
            <button>
                Add New Task
            </button>
        </form>
    </div>


    // <div>
    //     <form onSubmit={() => {addNewToDo()}}>
    //         <label htmlFor="new-todo">
    //             Que tarea se desea agendar?
    //         </label>
    //         <input
    //             id="new-todo"
    //             onChange={(e) => setTextItem(e.target.value)}
    //             value={textItem}
    //         />
    //         <button>
    //             Add New Task
    //         </button>
    //     </form>
    // </div>
    )
}

export default AddTodoItem