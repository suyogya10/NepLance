import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatedRoutes/>
      <Footer />
    </div>
  );
}

export default App;
