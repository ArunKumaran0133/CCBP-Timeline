import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div className="icon-heading-container-course">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="icon-duration-container">
          <AiFillClockCircle className="duration-icon" />
          <p className="duration-course">{duration}</p>
        </div>
      </div>
      <p className="description-course">{description}</p>

      <ul className="list-container-course">
        {tagsList.map(eachTag => (
          <li key={eachTag.id} className="item-container">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
