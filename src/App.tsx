import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Index from "@/pages/Index";
import One from "./pages/Admin/One";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Index />}>
          <Route path="admin">
            <Route index path="one" element={<One />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
