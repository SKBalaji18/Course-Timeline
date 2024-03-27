import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <>
      <div className="img-container">
        <img className="project-img" src={imageUrl} alt="project" />
      </div>
      <div className="project-duration-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <a href={projectUrl} target=".blank">
        Visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
