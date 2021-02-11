import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Navigation() {
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand className="ml-2">Pitt TA-Assignment App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="ml-2">Tab1</Nav.Link>
          <Nav.Link className="ml-2">Tab2</Nav.Link>
          <Nav.Link className="ml-2">Tab3</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Username" className="mr-sm-2" />
          <FormControl type="text" placeholder="Password" className="mr-sm-2" />
          <Button variant="outline-light">Sign In</Button>
        </Form>
      </Navbar>
    );
}

export default Navigation;