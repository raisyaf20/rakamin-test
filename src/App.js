import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Dashboard />} />
          <Route path="About" element={<About />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
