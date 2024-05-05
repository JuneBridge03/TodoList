import React, { useReducer, useState } from 'react';
import './App.css';
import TodoList from './pages/TodoList';
import Title from './pages/Title';
import { TodoEntity, TodolistReducer } from './pages/Utility';
import TodoInput from './pages/TodoInput';


export default function App() {
    const [todolist, dispatch] = useReducer(TodolistReducer, [])

    const handleAddTodolist = (title: string) => {
        dispatch({
            type: "add",
            entity: {
                id: (new Date()).getTime(),
                title: title,
                isDone: false
            }
        })
    }

    // TODO dispatch 넘겨주기 + 각 컴퍼넌트 내에서 dispatch에 맞추어 함수들 수정
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
                <Title />
                <TodoList
                    todolist={todolist}
                    dispatch={dispatch}
                />
                <TodoInput addfunc={handleAddTodolist} />
            </div>
        </div>
    );
}