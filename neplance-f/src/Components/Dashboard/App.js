import Header from './Header'; //Include Header
import Footer from './Footer'; //Include Footer
import Dashboard from './Dashboard'
import Settings from './Settings'
import Tables from './Tables'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
          <main class="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
              </Routes>
            <Footer></Footer>
          </main>
        </BrowserRouter>
     
    </div>
  );
}

export default App;