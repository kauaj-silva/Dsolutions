import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__container'>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/Dsolutions'}>inicio</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/Dsolutions/about'}>sobre</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/Dsolutions/skills'}>conhecimentos</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/Dsolutions/projects'}>projetos</Link>
                </li>
                <li className='navbar__item'>
                    <Link className='navbar__link' to={'/Dsolutions/contact'}>contato</Link>
                </li>
            </ul>
        </div>
    )

}