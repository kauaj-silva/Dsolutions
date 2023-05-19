import { FaLaptopCode } from 'react-icons/fa'
import './about.css'

export default function About() {

    return (
        <>
            <div className='about-container'>
                <div className="about-container__left">
                    <div className='animated-image'>
                        <FaLaptopCode className="about-container__icon" />
                    </div>

                </div>
                <div className="about-container__right">
                    <h1>Sobre mim</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe enim nostrum tempora quos accusamus quia, soluta aliquam ipsum accusantium, architecto non, possimus autem facilis fugiat corrupti id culpa natus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi tempor</p>
                </div>
            </div>

        </>
    )
}