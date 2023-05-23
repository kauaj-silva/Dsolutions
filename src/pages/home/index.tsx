import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import './home.css'

export default function Home() { 
    
    return (
        <>
            <div className='home__container'>
                <div className='home__container-left'>
                    <div className='home__container-left-title'>
                        <h2>Hello World <span className='page-detail'>!</span></h2>
                    </div>
                    <div className='home__container-left-content'>
                        <p>Meu nome é Kauã, e sou desenvolvedor Web.</p>
                    </div>
                    <div className='home__container-left-icons'>
                        <a href="http://github.com/kauaj-silva" target="_blank" rel="noopener noreferrer">
                            <BsGithub className="home__container-left-icon"/>
                        </a>
                        <a href="http://linkedin.com/in/kauãsilva/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="home__container-left-icon"/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp className="home__container-left-icon"/>
                        </a>
                        
                    </div>
                </div>
                <div className='home__container-right'>
                    <div className='animated-image'>
                        <CiUser className="home__image"/>
                    </div>
                </div>
            </div>
        </>
    )
}