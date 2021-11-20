import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HeroDetailScreen from "../views/HeroDetailScreen/HeroDetailScreen";
import HomeScreen from "../views/HomeScreen/HomeScreen";

import LoginScreen from "../views/LoginScreen/LoginScreen";
import SearchScreen from "../views/SearchScreen/SearchScreen";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <SearchScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/hero/:id"
          element={
            <PrivateRoute>
              <HeroDetailScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
