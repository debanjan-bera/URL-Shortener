import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
// import Dashboard from "./components/dashboard";
import CreateLink from "./pages/url-shortener/createlink";
import MyLinks from "./pages/url-shortener/MyLinks";
import SHORTIE from "./pages/url-shortener/SHORTIE";
import Dashboard from "./pages/url-shortener/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route element={<SHORTIE />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-link" element={<CreateLink />} />
            <Route path="/my-link" element={<MyLinks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
