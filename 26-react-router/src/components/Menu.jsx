import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <Link to="/contacts"> Contacts</Link>
      <Link to="/about"> About</Link>
    </nav>
  );
};

export default Menu;
