import {Chrono} from 'react-chrono'

import './index.css'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="timeline-container">
      <div className="resp-container">
        <div className="header-cont">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="span-head">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white,'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
