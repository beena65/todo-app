import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskAction';
const TodoForm = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;
