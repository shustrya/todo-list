import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/err";
import TasksList from "./components/tasks/list/TasksList";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <TasksList/>
            },
        //     {
        //         path: "/order", // <Link to="/order">Как сделать заказ</Link>
        //         element: <OrderAboutPage/>,
        //     },
        //     {
        //         path: "/catalog", // <Link to="/catalog">Каталог</Link>
        //         element: <CatalogPage/>,
        //         loader: genresLoader,
        //         children: [
        //             {
        //                 index: true, // <Link to="/catalog">Каталог</Link>
        //                 element: <PicturesPage/>,
        //                 loader: pictureByTitleOrDescriptionLoader,
        //             },
        //             {
        //                 // <Link to="/catalog/portrait">Портрет</Link>
        //                 // <Link to="/catalog/history">Историческая живопись</Link>
        //                 path: ":genre",
        //                 element: <PicturesPage/>,
        //                 loader: picturesByGenreLoader,
        //             }
        //         ]
        //     },
        ],
    },
];

export const router = createBrowserRouter(routes);
