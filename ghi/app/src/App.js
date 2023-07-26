import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AutomobileList from './AutomobileList';
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
