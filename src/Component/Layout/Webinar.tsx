import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import LeftArrowIcon from "../../Assets/arrow-left.svg";
import RightArrowIcon from "../../Assets/arrow-right.svg";

const WebinarCarouselSlider: React.FC = () => {
  const [_additionalTransform, setAdditionalTransform] = useState(100);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
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
        <div className="webinar-box">
          <div className="webinar-content">
            <span className="gradient-outline">01</span>
            <p>
              You have a great product or idea but struggle to generate
              consistent profits.
            </p>
          </div>
        </div>
        <div className="webinar-box">
          <div className="webinar-content">
            <span className="gradient-outline">02</span>
            <p>
              You’re ready to break free from financial dependence and create
              your own income.
            </p>
          </div>
        </div>
        <div className="webinar-box">
          <div className="webinar-content">
            <span className="gradient-outline">03</span>
            <p>
              You’re juggling family and ambition but lack the tools to balance
              both.
            </p>
          </div>
        </div>
        <div className="webinar-box">
          <div className="webinar-content">
            <span className="gradient-outline">04</span>
            <p>
              You want practical, actionable business guidance tailored for
              women.
            </p>
          </div>
        </div>
        <div className="webinar-box">
          <div className="webinar-content">
            <span className="gradient-outline">05</span>
            <p>
              You dream of building something that lasts while staying true to
              your values.
            </p>
          </div>
        </div>
    </Carousel>
  );
};

export default WebinarCarouselSlider;