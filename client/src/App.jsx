import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
// import Dashboard from "./components/dashboard";
import CreateLink from "./components/dashboard/createlink";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./components/dashboard";
import MyLinks from "./pages/url-shortener/MyLinks";

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardLayout />} />
            <Route path="create-link" element={<CreateLink />} />
            <Route path="manage-link" element={<MyLinks />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
