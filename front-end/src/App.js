import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
