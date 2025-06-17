import { Outlet } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {

  return (
    <div>
      <Header/>
      {/* <Banner/> */}
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
