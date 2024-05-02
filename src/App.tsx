import React from 'react';
import './App.css';
import TodoList from './pages/TodoList';
import Title from './pages/Title';


export default function App() {
  return (
    <div className="app">
      <div className='container'>
        <Title />
        <TodoList />
      </div>
    </div>
  );
}