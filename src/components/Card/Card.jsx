import './Card.scss';
import Icon from '../Icon/Icon';

const Card = ({ children, shadow = "right", className }) => {
    return <div className={'card shadow-' + shadow + ' ' + className}>
        <div className='card-shadow' />
        <div className='card-content'>
            {children && <div className='card-body'>{children}</div>}
        </div>
    </div>
}

const AboutCard = () => {
    return <Card className="about-card" shadow='right'>
        <h1>{"<h1>Hello word</h1>"}</h1>
        <p>I'm Sonya, an enthusiastic student of software development and programming</p>
        <ul>
            <li>🔭 I’m currently studying.</li>
            <li>🌱 I’m currently learning microservices.</li>
            <li>⚡ My favorite food is Mote de queso.</li>
        </ul>
    </Card>
}


const ProjectCard = ({
    projectTitle = "",
    projectDescription = "",
    projectLink = "", }) => {

    return <Card className="project-card" shadow='left'>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <a href={projectLink} target="_blank" rel="noreferrer" >
            <Icon
                iconName="github"
                iconExtension='svg'
                showLabel={false}
                inline={true} />
            <span>View project</span>
        </a>
    </Card>
}
export { Card, AboutCard, ProjectCard };