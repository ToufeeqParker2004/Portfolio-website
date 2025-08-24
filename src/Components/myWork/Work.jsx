import React from 'react'
import './Work.css'
import github_logo from '../../assets/github.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Work = () => {
  return (
    <div id='Portfolio' className='work'>
      <div className="work-titles">
              <h1>Link to Github</h1>
              <img src={theme_pattern} alt="" />
            </div>
      <a href="https://github.com/ToufeeqParker2004" target="_blank" rel="noopener noreferrer">
      <img src={github_logo} alt="" />
      </a>
    </div>
  )
}

export default Work