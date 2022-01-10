import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AvailableModules from "./available-modules";
import Layout from "./layouts/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div>
                <Link to="/home">Home Module</Link>
                <br />
                <Link to="/home/contact-us">Home Module contact us</Link>
              </div>
            }
          />
          {AvailableModules.map((moduleDef) => moduleDef.router)}
          <Route path="*" element={<h1>Nothing found its * and 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
