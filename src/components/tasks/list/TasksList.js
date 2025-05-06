import { Tasks } from '../../../tasks';
import Task from '../task/Task';
import taskStyle from './taskslist.module.css';

export default function TasksList() {
  const tasks = Tasks.filter( task => !task.finished )
              .sort((a,b) =>  new Date(a.finish_by) - new Date(b.finish_by))
              .map((y,idx)=> ({...y, n:idx+1}))
              .map(x => <Task taskData={x}/>);
  return (
      <div className={taskStyle.container}>
        <div style={{
          display: "flex",
          padding: "1rem",
          gap: "2rem"
        }}>
          <div>N</div>
          <div>Описание</div>
          <div>Завершить</div>
        </div>
        {tasks}
      </div>
  );
}
