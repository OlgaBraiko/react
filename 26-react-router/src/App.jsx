import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourses";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseSlug" element={<SingleCourse />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//три маршрута с тремя разными компонентами
//последний маршрут по умолчанию
//три маршрута вложены в маршрут Home
//MainLayout отобразит все компоненты на своей странице каждый
//courses/:slug путь с динамичным параметром, на месте slug будет наименование курса
