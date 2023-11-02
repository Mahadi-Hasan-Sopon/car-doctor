import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getServiceById } from "../../API/API";
import Error from "../../components/error/Error";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import GoBack from "../../utils/BackButton/GoBack";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const {
    data: service,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["service", serviceId],
    queryFn: () => getServiceById(serviceId),
  });

  if (isError) return <Error />;

  const { _id, title, thumbnail, price, description } = service || {};

  return (
    <div>
      {isFetching && <LoadingSpinner />}
      <GoBack />
      <h1 className="text-4xl font-bold text-center">Service Details</h1>
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="service-details col-span-2">
          <img className="rounded-xl" src={thumbnail} alt={title} />
          <h2 className="text-3xl font-bold text-dark-01 my-4"> {title} </h2>
          <p className="text-base font-normal text-dark-03"> {description} </p>
        </div>
        <div className="right-side">
          <h3 className="text-3xl font-bold text-dark-01">{`Price $${
            price && price?.toFixed(2)
          }`}</h3>
          <div className="proceed mt-10">
            <Link
              to={`/checkout/${_id}`}
              type="button"
              className="text-center w-full rounded-lg bg-primary-orange font-semibold text-lg py-4 text-white"
            >
              Proceed Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
