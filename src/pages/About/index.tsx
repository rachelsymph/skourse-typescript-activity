import { FooterContainer,AboutContainer } from './style'
import {Link} from "react-router-dom";

const About = () =>{
return(
    <div>
        <AboutContainer>
            <p>About Page</p>
        </AboutContainer>
        <FooterContainer>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </FooterContainer>
    </div>
     )   
}

export default About