import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TasksList from "./components/tasks/list/TasksList";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <TasksList/>
      <Footer/>
    </div>
  );
}

export default App;
