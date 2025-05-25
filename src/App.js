import Banner from "./components/banner/Banner";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TasksList from "./components/tasks/list/TasksList";

function App() {

  localStorage.setItem('imagei', 2);

  const ls = localStorage.getItem('imagei', 0);

  const images = [
    'https://dummyimage.com/600x400/333ccc/000&text=1',
    'https://dummyimage.com/600x400/333ccc/000&text=2',
    'https://dummyimage.com/600x400/333ccc/000&text=3',
    'https://dummyimage.com/600x400/333ccc/000&text=4',
    'https://dummyimage.com/600x400/333ccc/000&text=5',
    'https://dummyimage.com/600x400/333ccc/000&text=6',
    'https://dummyimage.com/600x400/333ccc/000&text=7',
    'https://dummyimage.com/600x400/333ccc/000&text=8',
  ];

  return (
    <div>
      <Header/>
      <Banner/>
      <Carousel images={images} index={ls} />
      <TasksList/>
      <Footer/>
    </div>
  );
}

export default App;
