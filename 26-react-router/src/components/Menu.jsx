import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="/contacts"> Contacts</NavLink>
      <NavLink to="/about"> About</NavLink>
    </nav>
  );
};

export default Menu;
//NavLink для стилизации пунктов меню
//end для того чтобы предотвратить добавление класса active для домашней страницы
//при переключении между пунктами меню(т.е мы меняем стиль ссылки только если находимся на стр с корневым путем)
