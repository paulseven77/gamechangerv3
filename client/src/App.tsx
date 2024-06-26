import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Public Pages
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

// Private Pages
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/private/AdminDashboard";
import DashboardPage from "./pages/private/DashboardPage";
import ProfilePage from "./pages/private/ProfilePage";
import RewardsPage from "./pages/private/RewardsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/rewards" element={<RewardsPage />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
