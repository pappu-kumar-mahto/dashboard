import { NavLink } from 'react-router-dom'
import './Navbar.css'
const NavbarComponent = () => {
  return (
    <div className="navbar">
      <div className="navMenu">
        <NavLink to='/' className="navItem"><span>Login</span></NavLink>
        <NavLink to='/home'className="navItem"><span>Home</span></NavLink>
        <NavLink to='/employee'className="navItem"><span>Employee</span></NavLink>
        <NavLink to='/department'className="navItem"><span>Department</span></NavLink>
      </div>
    </div>
  );
};
export default NavbarComponent;
