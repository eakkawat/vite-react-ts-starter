import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="container mx-auto px-4">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
