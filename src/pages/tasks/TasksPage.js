import { Link, useLoaderData, useParams } from "react-router-dom";
import TasksList from "../../components/tasks/list/TasksList";
import { Tasks } from "../../tasks";
import styleTasksPage from "./taskspage.module.css";

export async function tasksLoader() {
    const tasks = await new Promise((res) => {
        res(Tasks);
    });
  
    return tasks;
}

export default function TasksPage() {
    const tasks = useLoaderData();
    const params = useParams();

    const openedTasks = tasks.filter( t => !t.finish_by);

    const openedNumber = openedTasks.length;

    const onFire = openedTasks.sort( (a,b) => {
        return new Date(a.created_at) - new Date(b.created_at);
    }).slice(0,2);

    return (
        <div className={styleTasksPage.container}>
            <div className={styleTasksPage.menu}>
                <div className={styleTasksPage.opened}>
                    Открытых
                    <div className={styleTasksPage.bignumber}>
                        {openedNumber}
                    </div>
                </div>

                <div className={styleTasksPage.onfire}>
                    Важные
                <div className={styleTasksPage.list}>
                    {onFire.map(value => (<div key={value.id}>{value.title}</div>))}
                </div>
                </div>

                    <nav className={styleTasksPage.links}>
                        <Link to="/">Все задачи</Link>
                        <Link to="/opened">Открытые задачи</Link>
                        <Link to="/opened/expired">Просроченные</Link>
                        <Link to="/opened/active">Актуальные</Link>
                        <Link to="/finished">Завершенные задачи</Link>
                    </nav>

            </div>
            <TasksList tasks={tasks} params={params}/>
        </div>
    );
}
