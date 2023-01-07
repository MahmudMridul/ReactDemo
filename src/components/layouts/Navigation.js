import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigation() {
    return (
        <Nav
            card
            fill
            justified
            pills
            tabs
        >
            <NavItem> 
                <Link to='/'><h4>Home</h4></Link>
            </NavItem>

            <NavItem> 
                <Link to='/list'><h4>List</h4></Link>
            </NavItem>

            <NavItem>
                <NavLink href="#"> <h4>Contact</h4> </NavLink>
            </NavItem>
 
        </Nav>
    );
}
