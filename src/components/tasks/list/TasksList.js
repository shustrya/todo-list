import { Tasks } from '../../../tasks';
import Task from '../task/Task';
import Description from '../description/Description';
import tasksStyle from './taskslist.module.css';
import { useState } from 'react';

export default function TasksList() {
  const [ marksFilter, setMarksFilter ] = useState('');

  const tasks = Tasks.filter( task => !task.finished )
              .filter( mark => {
                if( !!marksFilter ) {
                  return mark.marks.some( x => x.includes(marksFilter));
                }
                return mark;
              })
              .sort((a,b) =>  new Date(a.finish_by) - new Date(b.finish_by))
              .map((y,idx)=> ({...y, n:idx+1}))
              .map(x => {
                return (<Task key={x.id} taskData={x}>
                  <Description description={x.description}/>
                </Task>);
              });

  function handleInput(event) {
    const value = event.target.value;
    setMarksFilter(value);
  }

  return (
      <div className={tasksStyle.container}>
        <div className={tasksStyle.filters}>
          <label>Filter:</label>
          <input onChange={(event) => handleInput(event)}/>
        </div>
        {tasks}
      </div>
  );
}
