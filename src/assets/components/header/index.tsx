import Navbar from './navbar'
import Options from './options'
import './header.css'

export default function Header() {


    return (
        <div className='header'>
            <header>
                <div className="header__logo">
                    <h1>Dsolutions <span className='page-detail'>.</span></h1>
                </div>
                <Navbar />
                <div className='menu-container'>
                    <Options />
                </div>
            </header>
        </div>
    )

}