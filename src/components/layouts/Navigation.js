import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

import style from '../../css/Navigation.module.css';

export default function Navigation() {
    return (
        <Nav
            className={style.colors}
            fill
            justified
            pills
        >
            <NavItem className={style.topGap}> 
                <Link to='/' className={style.noDecoration}> <h4>Home</h4> </Link>
            </NavItem>

            <NavItem className={style.topGap}> 
                <Link to='/add' className={style.noDecoration}><h4>Add</h4></Link>
            </NavItem>

            <NavItem className={style.topGap}>
                <Link to='/list' className={style.noDecoration}><h4>List</h4></Link>
            </NavItem>
 
        </Nav>
    );
}
