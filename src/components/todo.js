import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskAction';
import { MdAddCircleOutline } from 'react-icons/md';
const TodoForm = () => {
  const [task, setTask] = useState('');
  // console.log(task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        placeholder='Add a task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type='submit' className='form-btn'>
        <MdAddCircleOutline style={{ fontSize: '18px' }} />
      </button>
    </form>
  );
};

export default TodoForm;
