import TaskCard from "./TaskCard";
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tasks} = useContext(TaskContext)
 
  if (tasks.length === 0) {
    return <h1 className="text-white font-bold text-3xl text-center">No hay tareas</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {tasks.map((tasks) => (
        <TaskCard task={tasks} key={tasks.id} />
      ))}
    </div>
  );
}

export default TaskList;
