import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import "./Home.css";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import { getServices, getProducts } from "../../API/API";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import Rating from "../../utils/Rating/Rating";

function Home() {
  const {
    data: services,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [isShowAllService, setIsShowAllService] = useState(false);
  const [isShowAllProducts, setIsShowAllProducts] = useState(false);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }

  const displayedServices =
    services?.length > 6 && !isShowAllService ? services.slice(0, 6) : services;
  const displayedProducts =
    products?.length > 6 && !isShowAllProducts
      ? products.slice(0, 6)
      : products;

  return (
    <div>
      <Navbar />
      <div className="banner min-h-[600px]">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-14 right-36 z-10 w-14 h-14 rounded-full flex justify-center items-center bg-slate-50/20"
              >
                <FiArrowLeft className="text-xl text-white" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute bottom-14 right-14 z-10 w-14 h-14 bg-primary-orange rounded-full flex justify-center items-center"
              >
                <FiArrowRight className="text-xl text-white" />
              </button>
            )
          }
        >
          <div className="item1 text-left w-full h-full">
            <div className="flex flex-col gap-7 w-1/2 py-24 ps-24 pr-6 content">
              <h1 className="text-6xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="buttons flex gap-6 items-center">
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 bg-primary-orange rounded-md"
                >
                  Discover More
                </button>
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 border border-white rounded-md"
                >
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="item2 text-left w-full h-full">
            <div className="flex flex-col gap-7 w-1/2 py-24 ps-24 pr-6 content">
              <h1 className="text-6xl font-bold text-white">
                latest Tech For Your Desired Service
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="buttons flex gap-6 items-center">
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 bg-primary-orange rounded-md"
                >
                  Discover More
                </button>
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 border border-white rounded-md"
                >
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="item3 text-left w-full h-full">
            <div className="flex flex-col gap-7 w-1/2 py-24 ps-24 pr-6 content">
              <h1 className="text-6xl font-bold text-white">
                World Class Technician At Your Service
              </h1>
              <p className="text-lg font-normal text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="buttons flex gap-6 items-center">
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 bg-primary-orange rounded-md"
                >
                  Discover More
                </button>
                <button
                  type="button"
                  className="text-lg text-white font-semibold py-3 px-6 border border-white rounded-md"
                >
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="about-us py-12 grid md:grid-cols-2 md:gap-12 gap-6">
        <div className="image w-full relative">
          <div className="img1">
            <img
              className="w-11/12 h-full"
              src="https://i.ibb.co/qmwyz0q/about-us-person.jpg"
              alt=""
            />
            <img
              className="relative w-2/3 md:h-1/3 lg:h-2/3 -top-28 left-1/3"
              src="https://i.ibb.co/YRwyzVQ/about-us-parts.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="content space-y-6 -mt-20 md:mt-0">
          <h6 className="text-xl font-bold text-primary-orange">About Us</h6>
          <h1 className="text-5xl font-bold text-dark-01 lg:w-3/4 md:leading-[1.1]">
            We are qualified & of experience in this field
          </h1>
          <p className="text-dark-03">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {"don't"} look even slightly
            believable.
          </p>
          <p className="text-dark-03">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {"don't"} look even slightly
            believable.
          </p>
          <button
            type="button"
            className="text-lg text-white font-semibold py-3 px-6 bg-primary-orange rounded-md"
          >
            Get More Info
          </button>
        </div>
      </div>
      <div className="services py-12 space-y-4">
        <h6 className="text-xl text-center font-bold text-primary-orange">
          Service
        </h6>
        <h1 className="text-5xl text-center font-bold text-dark-01">
          Our Service Area
        </h1>
        <p className="text-dark-03 w-3/4 lg:w-1/2 mx-auto text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which {"don't"} look even slightly
          believable.
        </p>
        <div className="service-container grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {displayedServices?.map((service) => (
            <div
              className="p-6 rounded-xl shadow flex flex-col justify-center"
              key={service._id}
            >
              <img
                className="w-full h-52 rounded-lg"
                src={service.thumbnail}
                alt={service.title}
              />
              <h2 className="text-2xl font-bold text-dark-02 py-2">
                {service.title}
              </h2>
              <div className="flex-grow"></div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-primary-orange">
                  Price: ${((service.price * 100) / 100).toFixed(2)}
                </p>
                <Link
                  className="text-primary-orange text-xl"
                  to={`/services/service-details/${service._id}`}
                >
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setIsShowAllService(!isShowAllService)}
            type="button"
            className="text-lg text-primary-orange font-semibold py-4 px-7 border border-primary-orange rounded"
          >
            {isShowAllService ? "Show Less" : "More Services"}
          </button>
        </div>
      </div>
      <div className="info bg-dark-01 py-20 px-10 my-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center space-y-6">
          <div className="open flex items-center gap-6">
            <div className="icon">
              <AiOutlineFieldTime className="text-white text-5xl" />
            </div>
            <div className="content">
              <p className="text-white font-medium">
                We are open saturday-friday
              </p>
              <p className="text-2xl font-bold text-white">7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className="phone flex items-center gap-6">
            <div className="icon">
              <TbDeviceLandlinePhone className="text-white text-5xl" />
            </div>
            <div className="content">
              <p className="text-white font-medium">Have a question?</p>
              <p className="text-2xl font-bold text-white">+880 1641 819262</p>
            </div>
          </div>
          <div className="location flex items-center gap-6">
            <div className="icon">
              <FaMapLocationDot className="text-white text-5xl" />
            </div>
            <div className="content">
              <p className="text-white font-medium">Have a question?</p>
              <p className="text-2xl font-bold text-white">+880 1641 819262</p>
            </div>
          </div>
        </div>
      </div>
      <div className="products py-12 space-y-4">
        <h6 className="text-xl text-center font-bold text-primary-orange">
          Popular Products
        </h6>
        <h1 className="text-5xl text-center font-bold text-dark-01">
          Browse Our Products
        </h1>
        <p className="text-dark-03 w-3/4 lg:w-1/2 mx-auto text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which {"don't"} look even slightly
          believable.
        </p>
        <div className="product-container grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {displayedProducts?.map((product) => (
            <div
              className="p-6 rounded-xl shadow space-y-1 flex flex-col"
              key={product._id}
            >
              <img
                className="w-full h-52 rounded-lg"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="rating flex justify-center pt-3">
                <Rating rating={product.rating} />
              </div>
              <h2 className="text-2xl font-bold text-dark-02 text-center">
                {product.title}
              </h2>
              <div className="flex-grow"></div>
              <div className="flex items-center justify-around gap-4">
                <p className="text-xl font-semibold text-primary-orange">
                  Price: ${((product.price * 100) / 100).toFixed(2)}
                </p>
                <Link
                  className="text-primary-orange text-xl"
                  to={`/products/product-details/${product._id}`}
                >
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setIsShowAllProducts(!isShowAllProducts)}
            type="button"
            className="text-lg text-primary-orange font-semibold py-4 px-7 border border-primary-orange rounded"
          >
            {isShowAllProducts ? "Show Less" : "More Products"}
          </button>
        </div>
      </div>
      <div className="team py-12 space-y-4">
        <h6 className="text-xl text-center font-bold text-primary-orange">
          Team
        </h6>
        <h1 className="text-5xl text-center font-bold text-dark-01">
          Meet Our Team
        </h1>
        <p className="text-dark-03 w-3/4 lg:w-1/2 mx-auto text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which {"don't"} look even slightly
          believable.
        </p>
      </div>
    </div>
  );
}

export default Home;
