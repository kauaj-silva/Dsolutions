import './footer.css'
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'

function Footer() {
    
    return (
        <>
            <footer>
                <div className='footer__social-container'>
                    <div className='footer__social-icons'>
                        <BsGithub className="footer__social-icon"/> 
                    </div>
                    <div className='footer__social-icons'>
                        <BsLinkedin className="footer__social-icon"/>
                    </div>
                    <div className='footer__social-icons'>
                        <BsWhatsapp className="footer__social-icon"/>
                    </div>
                </div>
                <div className='footer__date'>
                    <p>© {new Date().getFullYear()} - todos os direitos reservados</p>
                </div>
                <div className='footer__name'>
                    <p>desenvolvido por <span>kaua</span></p>
                </div>
            </footer>
        </>
    )
}

export default Footer;