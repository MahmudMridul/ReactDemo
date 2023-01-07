import './App.css';
import Navigation from './components/layouts/Navigation';
import { Outlet } from 'react-router-dom';

export default function App() {
    return (
        <div className='container'>

            <div>
                <Navigation/>
            </div>

            <div>
                <Outlet/>
            </div>
            
        </div>
    );
}

