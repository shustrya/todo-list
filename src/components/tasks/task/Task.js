import { useState } from 'react';
import taskStyle  from './task.module.css';

export default function Task({taskData, children}) {
  const [isDescription, setIsDescription] = useState(false);

  const marks = taskData.marks.map(m => <div>{m}</div>);

  function handleTaskClick() {
    setIsDescription(!isDescription);
  }

  return (
    <div className={taskStyle.container}>
      <div
        key={taskData.id}
        style={{
          display: "flex",
          padding: "1rem",
          gap: "2rem"
        }}
        onClick={handleTaskClick}
      >
        <div>{taskData.n}</div>
        <div>{taskData.finish_by}</div>
        <div className={taskStyle.marks}>{marks}</div>
      </div>
      { isDescription ? children : null }
    </div>
  );
}
