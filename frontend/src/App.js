import StorePage from "./pages/StorePage";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {useGlobalState} from "./state/globalState";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const state = useGlobalState();

  return (
    <div>
      <Router>
      <Navigation/>
        <Routes>
          <Route exact path="*" element={<StorePage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
          <Route exact path="/register" element={<RegisterPage/>}></Route>
          {state.loggedIn && <Route exact path="/profile" element={<ProfilePage/>}></Route>}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
