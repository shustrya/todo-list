import { Tasks } from '../../../tasks';
import Task from '../task/Task';
import tasksStyle from './taskslist.module.css';
import { useState } from 'react';
import Edit from '../edit/Edit';

export default function TasksList() {
  const [ marksFilter, setMarksFilter ] = useState('');
  const [ sortFilter, setSortFilter] = useState('finish_by');
  const [ tasksState, setTasksState] = useState(Tasks);
  const selectOptions = [
    { name: 'finish_by', title: 'Дата завершение'},
    { name: 'created_at', title: 'Дата создания'},
    { name: 'users', title: 'Количество участников'}
  ];

  const tasks = tasksState
              .filter( mark => {
                if( !!marksFilter ) {
                  return mark.marks.some( x => x.includes(marksFilter));
                }
                return true;
              })
              .sort((a,b) =>  {
                  if(sortFilter === 'users') {
                    return b.users.length - a.users.length;
                  }

                  return new Date(a[sortFilter]) - new Date(b[sortFilter]);
              })
              .map((y,idx)=> ({...y, n:idx+1}))
              .map(x => {
                return (<Task key={x.id} taskData={x} onFinish={() => handleFinished(x.id)}>
                  <Edit users={x.users} onDelete={(name) => handleDelUsers(name, x.id)} onEdit={(name) => handleAddUsers(name, x.id)}/>
                </Task>);
              });

  function handleInput(event) {
    const value = event.target.value;
    setMarksFilter(value);
  }

  function handleFinished(id) {
    const result = tasksState.map( x => {
      if(x.id === id) {
        x.finished = true;
      }

      return x;
    });

    setTasksState(result);
  };

  function handleSort(event) {
    const value = event.target.value;
    setSortFilter(value);
  }

  function handleAddUsers(name, id) {
    if(name) {
      const result = tasksState.map( t => {
        if(t.id === id) {
          t.users.push(name);

        }
        return t;
      });

      setTasksState(result);
    }
  }

  function handleDelUsers(name, id) {
    const result = tasksState.map((t) => {
      if(t.id === id) {
        const ne = t.users.filter(x => x !== name);
        t.users = ne;
      }

      return t;
    });

    setTasksState(result);
  }

  return (
      <div className={tasksStyle.container}>
        <div className={tasksStyle.filters}>
          <label>Filter:</label>
          <input onChange={(event) => handleInput(event)}/>
          <select value={sortFilter} onChange={handleSort}>
            { selectOptions.map( (item, idx) => (<option key={idx} value={item.name}>{item.title}</option>)) }
          </select>
        </div>

        <table className={tasksStyle.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Время начала</th>
              <th>Метки</th>
              <th>Описание</th>
              <th>Участники</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {tasks}
          </tbody>
        </table>

      </div>
  );
}
