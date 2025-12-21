import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import CreateLink from "./pages/url-shortener/createlink";
import SHORTIE from "./pages/url-shortener/SHORTIE";
import QRGenerator from "./pages/url-shortener/QRGenerator";
import Dashboard from "./pages/url-shortener/Dashboard";
import MyLinks from "./pages/url-shortener/MyLinks";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<Settings />} />
          <Route element={<SHORTIE />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-link" element={<CreateLink />} />
            <Route path="/my-link" element={<MyLinks />} />

            <Route path="/qr-generator" element={<QRGenerator />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
