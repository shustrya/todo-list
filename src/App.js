import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import JobsList from "./components/jobs/list/Jobslist";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <JobsList/>
      <Footer/>
    </div>
  );
}

export default App;
