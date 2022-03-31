import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
