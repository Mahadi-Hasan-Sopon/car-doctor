import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./Home.css";

function Home() {
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
      <div className="about-us py-20 grid md:grid-cols-2 md:gap-12 gap-6">
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
      <div className="services">
        <h6 className="text-xl font-bold text-primary-orange">Service</h6>
        <h1 className="text-5xl font-bold text-dark-01 lg:w-3/4 md:leading-[1.1]">
          Our Service Area
        </h1>
        <p className="text-dark-03">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which {"don't"} look even slightly
          believable.
        </p>
        <div className="service-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {}
        </div>
      </div>
    </div>
  );
}

export default Home;
