import { Container } from './style' 
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
      <Container>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
      </Container>
  )
}


export default Footer 