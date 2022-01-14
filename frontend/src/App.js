import StorePage from "./pages/StorePage";
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StorePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
