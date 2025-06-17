import { useState } from 'react';
import taskStyle  from './task.module.css';
import Description from '../description/Description';

export default function Task({taskData, onFinish, children}) {
  const [isDescription, setIsDescription] = useState(false);
  const [isUsers, setIsUsers] = useState(false);

  const marks = taskData.marks.map((m,i) => <div key={i}>{m}</div>);

  function handleTaskClick() {
    setIsDescription(!isDescription);
  }

  function handleUsersClick() {
    setIsUsers(!isUsers);
  }

  function handleFinishClick(id) {
    onFinish(id);
  }

  return (
    <>
      <tr>
          <td>{taskData.id}</td>
          <td>{taskData.title}</td>
          <td>{taskData.created_at}</td>
          <td className={taskStyle.marks}>{marks}</td>
          <td><button onClick={handleTaskClick}>показать</button></td>
          <td><button onClick={handleUsersClick}>Участники</button></td>
          <td>{ taskData.finish_by ? <span>завершена</span> : <button onClick={() => handleFinishClick(taskData.id)}>завершить</button> }
          </td>
      </tr>
      { isDescription ? <Description description={taskData.description}/> : null }
      { isUsers ? children : null }
    </>
  );
}
