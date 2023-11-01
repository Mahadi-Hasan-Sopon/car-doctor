import { useQuery } from "@tanstack/react-query";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../API/API";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const { title, thumbnail, price, description } = product || {};

  return (
    <div>
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
      <h1 className="text-4xl font-bold text-center">Product Details</h1>
      <div className="grid grid-cols-3 gap-5 my-10">
        <div className="service-details col-span-2">
          <img
            className="rounded-xl max-h-[500px]"
            src={thumbnail}
            alt={title}
          />
          <h2 className="text-3xl font-bold text-dark-01 my-4"> {title} </h2>
          <p className="text-base font-normal text-dark-03"> {description} </p>
        </div>
        <div className="right-side">
          <h3 className="text-3xl font-bold text-dark-01">
            {price && `Price $${price?.toFixed(2)}`}
          </h3>
          <div className="proceed mt-10">
            <button
              type="button"
              className="text-center w-full rounded-lg bg-primary-orange font-semibold text-lg py-4 text-white"
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
