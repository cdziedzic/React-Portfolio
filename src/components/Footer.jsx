import {Link} from 'react-router-dom'
import github from '../assets/github-mark.svg'
import linkedin from '../assets/linkedin.svg'

function Footer() {
 return(
    <>
    <a href="https://github.com/cdziedzic">
        <img src={github} alt='github logo'/>
    </a>
    <a href="https://www.linkedin.com/in/chris-dziedzic-a70b32211/">
        <img src={linkedin} alt="linkedin logo" />
    </a>
    </>
 )
}

export default Footer