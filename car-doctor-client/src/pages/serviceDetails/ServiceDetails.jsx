import { BsArrowLeft } from "react-icons/bs";
import Navbar from "../../components/shared/Navbar";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="back">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="flex items-center gap-2 border border-sky-600 py-1.5 px-5 rounded-lg text-lg font-semibold hover:bg-sky-600 hover:text-slate-100"
        >
          <span>
            <BsArrowLeft className="text-xl font-extrabold" />
          </span>
          <span>Go Back</span>
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center">Service Details Page</h1>
    </div>
  );
};

export default ServiceDetails;
