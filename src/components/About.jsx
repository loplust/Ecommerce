import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores alias fugiat beatae, quia officia aliquid ullam tempore. Libero numquam nostrum, exercitationem hic accusamus iure laudantium error non eos ipsum ipsam saepe autem sapiente corporis, est sunt repellat cum iste deserunt, quaerat molestias! Officiis at deleniti voluptatem esse impedit! Beatae repudiandae, rem incidunt excepturi natus ratione totam laboriosam reprehenderit ad voluptatibus libero iure ab adipisci nobis architecto pariatur exercitationem illum obcaecati reiciendis aspernatur quas, commodi voluptate consectetur. Perferendis ad libero accusamus eos quas, blanditiis modi iure sed ipsum quaerat esse molestias nostrum voluptate odio quibusdam eaque excepturi amet asperiores animi!
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/images/about.png" alt="About Us" height='400px' width='400px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About