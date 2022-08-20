import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

export const Header = () => {
    return (
        <nav className='Header'>
            <div className="text">
                <h1>JSON Placeholder</h1>
                <span>Free fake API for testing and prototyping.</span>
            </div>
            <div className='navigation'>
                <ul className='list'>
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='posts'>
                        <li>Posts</li>
                    </NavLink>
                    <NavLink to='gallery'>
                        <li>Gallery</li>
                    </NavLink>
                    <NavLink to='todos'>
                        <li>ToDo's</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
