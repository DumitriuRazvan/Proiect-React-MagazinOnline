import StorePage from "./pages/StorePage";
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import {useGlobalState} from "./state/globalState";

function App() {
  const state = useGlobalState();

  return (
    <div>
      <Router>
      <Navigation/>
        <Routes>
          <Route exact path="/" element={<StorePage/>}></Route>
          <Route exact path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
