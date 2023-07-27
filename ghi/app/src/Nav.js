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
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/manufacturers">
                Manufacturers
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/manufacturers/form">
                Add new Manufacturer
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/models">
                Models
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/models/form">
                Add new Model
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/automobiles">
                Automobile Inventory
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink className="dropdown-item" to="/automobile/form">
                Automobile Form
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sales Team" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/salespeople/form">Add a Salesperson</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/customers">Customers</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/customers/form">Add a Customer</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/sales">Sales</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/sales/form">Sales Form</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/saleshistory">Salesperson History</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Service Team" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/technician_list">Technician List</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/technicians">Add Technician</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/appointment_list">Appointment List</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/create_appointment">Appointment Form</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <NavLink className="dropdown-item" to="/service_history">Service History</NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NewNav;
