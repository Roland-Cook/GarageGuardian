import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NewNav() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-success">
      <Container>
        <Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            CarCar
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Inventory" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdown-item" to="/manufacturers">
                Manufacturers
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/manufacturers/form">
                Add new Manufacturer
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/models">
                Models
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/models/form">
                Add new Model
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/automobiles">
                Automobile Inventory
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/automobile/form">
                Automobile Form1
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sales Team" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdown-item" to="/salespeople">Salespeople
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/salespeople/form">Add a Salesperson
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/customers">Customers
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/customers/form">Add a Customer
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/sales">Sales
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/sales/form">Sales Form
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/saleshistory">Salesperson History
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Service Team" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdown-item" to="/technician_list">Technician List
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/technicians">Add Technician
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/appointment_list">Appointment List
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/create_appointment">Appointment Form
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item" to="/service_history">Service History
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NewNav;
