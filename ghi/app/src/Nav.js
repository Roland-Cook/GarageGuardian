import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import carcarmicrologo from "./Logos/carcarmicrologo.png"

function NewNav() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-success">
      <Container className="bg-success">
        <Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            <img src={carcarmicrologo} alt="CarCar" />
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown className="navbar navbar-expand-lg navbar-dark bg-success" title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/manufacturers">Manufacturers</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/manufacturers/form">Add new Manufacturer</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/models">Models</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/models/form">Add new Model</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/automobiles">Automobile Inventory</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
              <NavLink className="dropdown-item bg-success" to="/automobile/form">Automobile Form</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="navbar navbar-expand-lg navbar-dark bg-success" title="Sales Team" id="basic-nav-dropdown">
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/salespeople">Salespeople</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/salespeople/form">Add a Salesperson</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/customers">Customers</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/customers/form">Add a Customer</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/sales">Sales</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/sales/form">Sales Form</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/saleshistory">Salesperson History</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className="navbar navbar-expand-lg navbar-dark bg-success" title="Service Team" id="basic-nav-dropdown">
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/technician_list">Technician List</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/technicians">Add Technician</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/appointment_list">Appointment List</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/create_appointment">Appointment Form</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="bg-success">
            <NavLink className="dropdown-item bg-success" to="/service_history">Service History</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NewNav;
