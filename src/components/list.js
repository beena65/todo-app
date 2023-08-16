import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../actions/taskAction';
import { AiFillDelete } from 'react-icons/ai';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className='todo-item'>
          <input
            type='checkbox'
            class='checkbox-round'
            checked={todo.completed}
            onChange={() => dispatch(updateTask(todo.id))}
          />
          <span className={todo.completed ? 'completed' : 'uncomplete'}>
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTask(todo.id))}
            className='del-btn'
          >
            <AiFillDelete className='delete' />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
