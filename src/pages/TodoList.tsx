import { useReducer } from "react"
import { TodoEntity, TodolistReducer } from "./Utility"
import TodoInput from "./TodoInput"
import TodoElement from "./TodoElement"


export default function TodoList() {
    const [todolist, dispatch] = useReducer(TodolistReducer, [])

    function handleAddTodolist(title: string) {
        dispatch({
            type: 'added',
            entity: {
                id: (new Date()).getTime(),
                title: title,
                isDone: false
            }
        })
    }

    function handleDeleteTodolist(id : number) {
        dispatch({
            type: 'deleted',
            entity: {
                id: id,
                title: '',
                isDone: false
            }
        })
    }

    // id에 따른 title과 isDone을 entity에 맞추어서 바꾸어주는 함수
    function handleChangeTodolist(entity: TodoEntity) {
        dispatch({
            type: 'changed',
            entity: entity
        })
    }


    return (
        <div>
            <div className="todoList">
                {todolist.map(e => TodoElement(e, handleDeleteTodolist, handleChangeTodolist))}
            </div>
            <TodoInput addfunc={handleAddTodolist} />
        </div>
    )
}