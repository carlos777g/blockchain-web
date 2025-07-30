import { Routes, Route } from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {Contact} from "../pages/Contact";
import { About } from "../pages/About";
import {NotFoundPage} from "../pages/NotFoundPage";


export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
