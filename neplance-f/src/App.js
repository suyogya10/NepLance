import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatedRoutes/>
    </div>
  );
}

export default App;
