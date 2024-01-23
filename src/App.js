import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar";
import Cast from "./pages/Cast";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/movie/:id/cast" element={<Cast />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
