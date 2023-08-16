import React from 'react';
import './App.css';

import TodoForm from './components/todo';
import TodoList from './components/list';
function App() {
  return (
    <div className='App'>
      <div className='todo-wrapper'>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
