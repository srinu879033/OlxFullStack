import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CreatePage from "./components/CreatePage/CreatePage";
import ProductDetailsPage from "./components/ProductDetailsPage.js/ProductDetailsPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<HomePage />} />
          </Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sellProduct" element={<CreatePage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
