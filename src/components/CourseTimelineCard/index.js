import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <>
      <div className="course-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <ul className="taglist-cont">
        {tagsList.map(eachItem => (
          <li className="tag-list" key={eachItem.id}>
            <p className="course-tag">{eachItem.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
