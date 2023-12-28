import React from 'react'
import TimeLineItem from './TimelineItem';
import timeline from '../data/timeline.js'

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:7/12">
        {timeline.map((item) => (
          <TimeLineItem
            year={item.year}
            title={item.year}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;