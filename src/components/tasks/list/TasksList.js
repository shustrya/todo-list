import { Tasks } from '../../../tasks';
import Task from '../task/Task';
import tasksStyle from './taskslist.module.css';
import { useReducer } from 'react';
import Edit from '../edit/Edit';

const Filters = { marks: '', sort: 'finish_by' };

export default function TasksList() {
  const [ tasksInit, tasksDispatch ] = useReducer(handleTasks, Tasks);
  const [ filtersInit, filtersDispatch ] = useReducer(handleFilters, Filters);

  const selectOptions = [
    { name: 'finish_by', title: 'Дата завершение'},
    { name: 'created_at', title: 'Дата создания'},
    { name: 'users', title: 'Количество участников'}
  ];

  const tasks = tasksInit
                        .filter( mark => {
                          if( !!filtersInit.marks ) {
                            return mark.marks.some( x => x.includes(filtersInit.marks));
                          }
                          return true;
                        })
                        .sort((a,b) =>  {
                            if(filtersInit.sort === 'users') {
                              return b.users.length - a.users.length;
                            }
                            return new Date(a[filtersInit.sort]) - new Date(b[filtersInit.sort]);
                        })
                        .map((y,idx)=> ({...y, n:idx+1}))
                        .map(x => {
                          return (<Task key={x.id} taskData={x} onFinish={() => handleFinished(x.id)}>
                            <Edit users={x.users} onDelete={(name) => handleDelUsers(name, x.id)} onEdit={(name) => handleAddUsers(name, x.id)}/>
                          </Task>);
                        });

  function handleFilters(state, action) {
    if(action.type === 'sort') {
      return {
        ...state,
        sort: action.sort
      };
    }

    if(action.type === 'marks') {
      return {
        ...state,
        marks: action.marks
      };
    }
  }

  function handleTasks(state, action) {
    if(action.type === "add") {
      return [
        ...state,
{        id: Math.random() * 10000,
        created_at: new Date().toISOString(),
        finish_by: null,
        marks: ["new"],
        description: "new task",
        users: []}
    ];
    }

    if (action.type === "update") {
      return state.map((cat) => {
        if (cat.url === action.category.url) {
            return action.category;
        }
        return cat;
      });
    }

    if( action.type === "finish") {
      return state.map( item => {
        if(item.id === action.id) {
          item.finish_by = new Date().toISOString();
        }
        return item;
      });
    }

    if (action.type === 'userdel') {
        return state.map(item => {
          if(item.id === action.id) {
            item.users = item.users.filter( x => x !== action.name)
          }
          return item;
        });
    }

    if (action.type === 'useradd') {
      return state.map(item => {
        if(item.id === action.id) {
          item.users.push(action.name);
        }
        return item;
      });
  }
  }

  function handleChangeSort(event) {
    const value = event.target.value;

    filtersDispatch({
        type: "sort",
        sort: value
    });
  }

  function handleInput(event) {
    const marks = event.target.value;

    filtersDispatch({
      type: "marks",
      marks
    });
  }

  function handleFinished(id) {
    tasksDispatch({
      type: "finish",
      id
    });
  }

  function handleAddUsers(name, id) {
    tasksDispatch({
      type: "useradd",
      name,
      id
    });
  }

  function handleDelUsers(name, id) {
    tasksDispatch({
      type: "userdel",
      name,
      id
    });
  }

  function handleAdd() {
    tasksDispatch({
      type: "add"
    });
  }

  return (
      <div className={tasksStyle.container}>
        <div className={tasksStyle.filters}>
          <label>Filter:</label>
          <input onChange={(event) => handleInput(event)}/>
          <select value={filtersInit.sort} onChange={handleChangeSort}>
            { selectOptions.map( (item, idx) => (<option key={idx} value={item.name}>{item.title}</option>)) }
          </select>
          <button onClick={handleAdd}>Add New</button>
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
