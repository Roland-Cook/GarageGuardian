import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './Inventory/AutomobileList';
import SalespersonList from './Sales/SalespersonList';
import CustomerList from './Sales/CustomerList';
import SalesList from './Sales/SalesList';
import CreateSalespersonForm from './Sales/CreateSalesperson';
import CreateCustomerForm from './Sales/CreateCustomer';
import CreateSalesForm from './Sales/CreateSale';
import SalespersonHistory from './Sales/SalespersonHistory';
import CreateTechnicianForm from './Service/CreateTechnician';
import TechnicianList from './Service/TechnicianList';
import CreateAppointmentForm from './Service/CreateServiceAppointment';
import AppointmentList from './Service/AppointmentList';

function App(props) {
  return (
    
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/automobiles" element={<AutomobileList autos={props.autos} />} />
          <Route path="/salespeople" element={<SalespersonList />} />
          <Route path="/salespeople/form" element={<CreateSalespersonForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/form" element={<CreateCustomerForm />} />
          <Route path="/sales" element={<SalesList />} />
          <Route path="/saleshistory" element={<SalespersonHistory />} />
          <Route path="/sales/form" element={<CreateSalesForm />} />
          <Route path="/technicians" element={<CreateTechnicianForm />} />
          <Route path="/technician_list" element={<TechnicianList />} />
          <Route path="/create_appointment" element={<CreateAppointmentForm />} />
          <Route path="/appointment_list" element={<AppointmentList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
