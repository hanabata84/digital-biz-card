import React from 'react'
import twitterLogo from '../assets/twitter-icon.svg'
import fbIcon from '../assets/fb-icon.svg'
import igIcon from '../assets/ig-icon.svg'
import githubIcon from '../assets/github-icon.svg'

function Footer() {
    return (
        <footer>
            <img src={twitterLogo} alt="twitter logo" />
            <img src={fbIcon} alt="facebook icon" />
            <img src={igIcon} alt="instagram icon" />
            <img src={githubIcon} alt="github icon" />
        </footer>
    )
}

export default Footer