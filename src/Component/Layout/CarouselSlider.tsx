import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import IconQuote from "../../Assets/icon-quotes.svg";
import LeftArrowIcon from "../../Assets/arrow-left.svg";
import RightArrowIcon from "../../Assets/arrow-right.svg";

const CarouselSlider: React.FC = () => {
  const [_additionalTransform, setAdditionalTransform] = useState(100);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
      artialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="custom-arrow custom-left-arrow"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <img src={LeftArrowIcon} alt="Previous" />
    </button>
  );

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="custom-arrow custom-right-arrow"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <img src={RightArrowIcon} alt="Next" />
    </button>
  );

  useEffect(() => {
    const updateTransform = () => {
      if (window.innerWidth <= 464) {
        setAdditionalTransform(0);
      } else {
        setAdditionalTransform(100);
      }
    };

    updateTransform();
    window.addEventListener("resize", updateTransform);

    return () => {
      window.removeEventListener("resize", updateTransform);
    };
  }, []);

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={1000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderDotsOutside={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={2}/> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={1} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={4} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={5} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>
      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={2}/> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={1} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={4} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>

      <div className="testimonial-inner">
        <img src={IconQuote} alt="" className="quotes-icon" />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex{" "}
        </p>
        {/* <Ratings rating={5} /> */}
        <p className="mb-0" style={{ lineHeight: "1.8" }}>
          <strong>Name goes here</strong>
          <br />
          Designation goes here
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
