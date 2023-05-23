import styled from 'styled-components'
import { FaEye, FaCode } from 'react-icons/fa'

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    gap:5rem;
    flex-grow:1;
`

const ProjectsContainerTitle = styled.div`

    h2 {
        font-size: 2rem;
        letter-spacing: 0.1rem;
        color: var(--titleFontColor);
        position:relative;
        padding:15px;

        &::after {
            content: '';
            position:absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: rgba(63, 63, 63, 0.589);
        }
    }
`

const ProjectsContainerContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    margin: 1rem;
    grid-column: 1/3;
    
`

interface ProjectCardProps {
    image: string;
}

const ProjectCard = styled.div<ProjectCardProps>`
    background:url(${(props) =>props.image}) center / cover;
    width: 300px;
    height: 180px;
    position: relative;
    border: 1px solid rgba(63, 63, 63, 0.589);
    border-radius: 10px;
    display:flex;
    align-items:flex-end;
    overflow:hidden;

    div {
        background-color:rgba(0, 0, 0, 0.863);
        margin: 0.5rem 0.5em;
        border-radius: 100px;
        display:flex;
        align-items:center;
        justify-content:center;
        opacity: 0;
        transition:.6s;
    }

    &:hover a,
    &:hover div{
            opacity: 1;
        }


    a {
        margin: 0rem 0.5em;
        text-decoration: none;
        color:var(--iconsFontColor);
        font-size: 20px;
        opacity: 0;
        transition:.6s;

        &:hover {
            color: var(--iconDetailColor);
            scale: 1.1;
            transform:translateY(-3px);
            filter: drop-shadow(0px 0px 5px var(--iconDetailColor));
        }
    }

`

export default function Projects() {

    return (
        <ProjectsContainer>
            <ProjectsContainerTitle>
                <h2>Projetos</h2>
            </ProjectsContainerTitle>

            <ProjectsContainerContent>
                <ProjectCard image={'../src/assets/img/Speeder.png'}>
                    <div>
                        <a href="" target='_blank'><FaEye /></a>
                        <a href="" target='_blank'><FaCode /></a>
                    </div>
                    
                </ProjectCard>
                <ProjectCard>
                    <a href="" target='_blank'><FaEye /></a>
                    <a href="" target='_blank'><FaCode /></a>
                </ProjectCard>
                <ProjectCard>
                    <a href="" target='_blank'><FaEye /></a>
                    <a href="" target='_blank'><FaCode /></a>
                </ProjectCard>
                <ProjectCard image={'\src\assets\img\Speeder.png'}>
                    <a href="" target='_blank'><FaEye /></a>
                    <a href="" target='_blank'><FaCode /></a>
                </ProjectCard>
                <ProjectCard>
                    <a href="" target='_blank'><FaEye /></a>
                    <a href="" target='_blank'><FaCode /></a>
                </ProjectCard>
                <ProjectCard>
                    <a href="" target='_blank'><FaEye /></a>
                    <a href="" target='_blank'><FaCode /></a>
                </ProjectCard>
            </ProjectsContainerContent>

        </ProjectsContainer>
    )
}
