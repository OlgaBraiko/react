import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "yellow", textDecoration: "none" } : {}
        }
        to="."
        end>
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="/contacts">
        Contacts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Menu;
//NavLink для стилизации пунктов меню + active
//end для того чтобы предотвратить добавление класса active для домашней страницы
//при переключении между пунктами меню(т.е мы меняем стиль ссылки только если находимся на стр с корневым путем)

//так же вариант с длбавление класса, фн-ии
//вариант добавление style
