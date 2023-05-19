import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__container'>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/'}>inicio</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/about'}>sobre</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/skills'}>conhecimentos</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/projects'}>projetos</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/contact'}>contato</Link>
                </li>
            </ul>
        </div>
    )

}