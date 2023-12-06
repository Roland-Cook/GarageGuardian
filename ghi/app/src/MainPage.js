import "./index.css"
import carcarlogo from "./Logos/carcarlogo.png"
import GgMain from "./Logos/Ggmain.jpg"

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold"><img className="logo-main-page" alt="File not found" src={GgMain}/></h1>
      <div className="col-lg-6 mx-auto">
        
        <p className="lead mb-20 bold">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
  );
}

export default MainPage;
