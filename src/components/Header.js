import { Link } from "react-router-dom";
import '../Header.css'

const Header = () => {
  return (
    <div>
      <div className="main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
