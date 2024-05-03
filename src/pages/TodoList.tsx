import { TodoEntity } from "./Utility"
import TodoElement from "./TodoElement"
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"


export default function TodoList(
    {handleDeleteTodolist, handleChangeTodolist, todolist} 
    : 
    {
        handleDeleteTodolist : (id : number) => void,
        handleChangeTodolist : (entity: TodoEntity) => void,
        todolist : TodoEntity[]
    }
) {
    /**
    const handleEnd = (result: any) => {
        // 아 drap and drop 어렵다 ㅠㅠㅠㅠ
    }
    */


    return (
        <div>
            <div className="todoList">
                {todolist.map(
                    e => TodoElement(e, handleDeleteTodolist, handleChangeTodolist)
                )}
            </div>
        </div>
    )
}