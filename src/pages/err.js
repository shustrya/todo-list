import { useRouteError } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <Header/>
            <h1>Содержимое не может быть отображено</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Footer/>
        </div>
    );
}
