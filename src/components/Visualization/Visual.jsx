import React from 'react'
import "./Visual.css"
import CandidateTable from '../Candidates/CandidateTable'
import JobBar from '../JobBarChart/JobBar'

const Visual = () => {
  return (
    <div className='visual'>
      <CandidateTable />
      <JobBar />
    </div>
  )
}

export default Visual
