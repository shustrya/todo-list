import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/err";
import TasksPage, { tasksLoader } from "./pages/tasks/TasksPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <TasksPage/>,
                loader: tasksLoader,
                path: ":path?/:opt?"
            }
        ],
    },
];

export const router = createBrowserRouter(routes);
