import { FooterContainer, ContactContainer } from './style'
import {Link} from "react-router-dom";

const Contact = () =>{
return(
    <div>
        <ContactContainer>
            <p>About Page</p>
        </ContactContainer>
        <FooterContainer>
            <Link to="/about">About</Link>
            <Link to="/about">Contact</Link>
        </FooterContainer>
    </div>
)
}

export default Contact