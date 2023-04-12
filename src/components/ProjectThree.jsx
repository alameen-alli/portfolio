import React from 'react';
import mobile from '../image/mobile (1).png'

const ProjectThree = () => {
  return (
    <section className='mb-32'>
      <div className='project-grid'>
        <div className='project-preview'>
          <img className='project-one-img drop-shadow-xl' src={mobile} />
        </div>

        <div className='project-summary'>
          <div className='project-index'>

          </div>
          <h2>Designing the future of education</h2>
          <p>Designing a platform to help educators build better online coursewar</p>
          <div>
            <a href="">
              <span>View Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectThree;