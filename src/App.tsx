import React, { useState } from 'react';
import './App.css';
import TodoList from './pages/TodoList';
import Title from './pages/Title';
import { TodoEntity } from './pages/Utility';
import TodoInput from './pages/TodoInput';


export default function App() {
  const [todolist, setTodoList] = useState<TodoEntity[]>([])

    const handleAddTodolist = (title: string) => {
        setTodoList([
            ...todolist,
            {
                id: (new Date()).getTime(),
                title: title,
                isDone: false
            }
        ])
    }

    const handleDeleteTodolist = (id : number) => {
        setTodoList(
            todolist.filter(en => en.id != id)
        )
    }

    const handleChangeTodolist = (entity: TodoEntity) => {
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
    <div className="app">
      <div className='container'>
        <Title />
        <TodoList 
          handleDeleteTodolist={handleDeleteTodolist} 
          handleChangeTodolist={handleChangeTodolist}
          todolist={todolist}
        />
        <TodoInput addfunc={handleAddTodolist} />
      </div>
    </div>
  );
}