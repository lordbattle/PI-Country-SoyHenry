import { Landing, Home, Detail, FormActivities, NotFound } from "./Views";
import NavBar from "./components/NavBar/NavBar";
import ValidationDetailRoute from "./components/ValidationDetailRoute/ValidationDetailRoute";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        {/* <Route path="/detail/:countryId" element={<Detail />} /> */}
        <Route path="/detail/:countryId" element={<ValidationDetailRoute />} />
        <Route path="/FormActivities" element={<FormActivities />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* * -> Si la url no coincide con las anteriores entrara a este componente. */}
      </Routes>
    </div>
  );
}

export default App;
