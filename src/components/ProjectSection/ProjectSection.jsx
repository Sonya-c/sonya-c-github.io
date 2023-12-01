import './ProjectSection.scss';
import projects from '../../data/projects';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

const ProjectCard = ({
  title = "",
  description = "",
  githubRepo,
  liveLink,
  image,
  techStack
}) => {

  return <Card className="project" shadow='left'>
    {image && <img src={'/assets/images/' + image} alt={title} />}
    <h3>{title}</h3>
    <p>{description}</p>
    {techStack && <p className='tech-stack'>
      {techStack.map((tech, index) => {
        return <span className='stack' key={index}>{tech}</span>
      })}
    </p>}
    <p>
      <a href={githubRepo} target="_blank" rel="noreferrer" >
        <Icon
          iconName="github"
          iconExtension='svg'
          showLabel={false}
          inline={true} />
        <span>Github Repo</span>
      </a>
      {liveLink && <span className='dot'>·</span>}
      {liveLink && <a href={liveLink} target="_blank" rel="noreferrer" >
        <span>Live solution</span>
      </a>}
    </p>
  </Card>
}

const ProjectSection = () => {
  return <section className='section'>
    <h2>Projects</h2>
    <div className='main-content'>
      {
        projects.map((project, index) => {
          return <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubRepo={project.githubRepo}
            liveLink={project.liveLink}
            image={project.image}
            techStack={project.techStack}
          />
        })
      }
    </div>
  </section>
}

export default ProjectSection;