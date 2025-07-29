import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";


export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
