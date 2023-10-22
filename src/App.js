import "../src/CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Home from "./components/home";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const employerID = useSelector((state) => state.auth.employerid);
  const userID = useSelector((state) => state.auth.internID);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
