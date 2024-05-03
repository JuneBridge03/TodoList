import { useReducer, useState } from "react"
import { TodoEntity } from "./Utility"
import TodoInput from "./TodoInput"
import TodoElement from "./TodoElement"


export default function TodoList() {
    const [todolist, setTodoList] = useState<TodoEntity[]>([])

    function handleAddTodolist(title: string) {
        setTodoList([
            ...todolist,
            {
                id: (new Date()).getTime(),
                title: title,
                isDone: false
            }
        ])
    }

    function handleDeleteTodolist(id : number) {
        setTodoList(
            todolist.filter(en => en.id != id)
        )
    }

    // id에 따른 title과 isDone을 entity에 맞추어서 바꾸어주는 함수
    function handleChangeTodolist(entity: TodoEntity) {
        setTodoList(todolist.map(
            (en) => {
                if (en.id == entity.id){
                    return entity
                }
                return en
            }
        ))
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