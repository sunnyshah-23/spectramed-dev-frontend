import "./App.css";
import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Ourservices from "./components/Ourservices";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Ourservices />
      <Aboutus />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
