import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="heading-icon-container-project">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="icon-duration-container-project">
          <AiFillCalendar className="project-icon" />
          <p className="project-duration-text">{duration}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
        <a href={projectUrl}>Visit</a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
