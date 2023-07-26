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
import ModelList from './Inventory/ModelList';
import ManufacturerList from './Inventory/ManufacturerList';
import ServiceHistory from './Service/ServiceHistory';
import CreateManufacturer from './Inventory/ManufacturerCreate';
import CreateModelForm from './Inventory/ModelCreate';
import CreateAutomobileForm from './Inventory/AutomobileCreate';

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturerList/>} />
          <Route path="/manufacturers/form" element={<CreateManufacturer/>} />
          <Route path="/automobiles" element={<AutomobileList/>} />
          <Route path="/models" element={<ModelList/>} />
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
          <Route path="/service_history" element={<ServiceHistory />} />
          <Route path="/service_history" element={<ServiceHistory />} />
          <Route path="/models/form" element={<CreateModelForm />} />
          <Route path="/automobile/form" element={<CreateAutomobileForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
