import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaPhp, FaGitAlt
} from 'react-icons/fa'
import {useRef} from 'react'
import './skills.css'


export default function Skills() {
    const icons = useRef<HTMLDivElement>(null)
    return (

        <div className='skills-container'>
            <div className="skills-container__title"><h1>Solução de problemas</h1></div>
            <div className="skills-container__technoligies">
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaHtml5 className="skills-container__technology_icon" ref={icons} />
                        <h2>HTML</h2>
                    </div>

                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaCss3Alt className="skills-container__technology_icon" />
                        <h2>CSS</h2>
                    </div>
                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaJsSquare className="skills-container__technology_icon" />
                        <h2>JavaScript</h2>
                    </div>
                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaReact className="skills-container__technology_icon" />
                        <h2>React</h2>
                    </div>
                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaBootstrap className="skills-container__technology_icon" />
                        <h2>Bootstrap</h2>
                    </div>
                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaPhp className="skills-container__technology_icon" />
                        <h2>PHP</h2>
                    </div>
                </div>
                <div className="skills-container__technology">
                    <div className="skills-container__technology_item">
                        <FaGitAlt className="skills-container__technology_icon" />
                        <h2>Git</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}