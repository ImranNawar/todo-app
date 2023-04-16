import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function TextLinkExample() {
  return (
    <Navbar className='header'>
      <Container>
        <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
        <Navbar.Toggle />
        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Guest</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;