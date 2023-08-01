import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";
import { useEffect } from "react";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug); //ищем определенный курс в массиве курсов
  useEffect(() => {
    if (!course) {
      //направили юзера на стр со всеми курсами
      navigate("..", { relative: "path" });
    }
  }, [course]); //каждый раз когда меняется значение course вызывается фн-ия
  //если в массиве не указать зависимость course то фн-ия будет вызвана толкьо один раз

  //Simply show NotFound component
  // if (!course) {
  //return <NotFound />;
  // }
  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
    //ссылка относительна node.js поэтому добавляется / или ..
  ); // /courses
};
export default SingleCourse;

//useParams - доступ к параметрам пути(после :)
//useNavigate - перенаправляет юзера на другую страницу
