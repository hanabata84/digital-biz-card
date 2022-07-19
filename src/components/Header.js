import React from 'react'
import ProfilePic from '../assets/profile-pic.png'
import EmailSvg from '../assets/Mail.svg'
import linkedinSvg from '../assets/linkedin.svg'

function Header() {
    return (
        <header>
            <img src={ProfilePic} alt="" />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>
            <div className="btn">
                <button className='email'> <img src={EmailSvg} alt='email' /> Email</button>
                <button className='linkedin'><img src={linkedinSvg} alt='linkedin' /> LinkedIn</button>
            </div>
        </header>
    )
}

export default Header