import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/shared/Navbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="banner max-h-[600px]">
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
    </div>
  );
}

export default Home;
