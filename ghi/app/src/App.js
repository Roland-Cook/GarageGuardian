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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
