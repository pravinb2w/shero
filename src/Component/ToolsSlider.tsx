import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Ensure this CSS is imported
import ToolLogo1 from "../Assets/tool-logo-1.svg";
import ToolLogo2 from "../Assets/tool-logo-2.svg";
import ToolLogo3 from "../Assets/tool-logo-3.svg";
import ToolLogo4 from "../Assets/tool-logo-4.svg";
import ToolLogo5 from "../Assets/tool-logo-5.svg";
import ToolLogo6 from "../Assets/tool-logo-6.svg";

const ToolsSlider: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 4,
    },
    tablet1: {
        breakpoint: { max: 750, min: 464 },
        items: 3,
      },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="sec-six-tools text-center">
      <div className="container p-0">
        <h2 className="font-bold h1-title">
          <span className="text-pink">Tools</span> you will learn
        </h2>

        {/* Carousel Component */}
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={false}
          infinite
          keyBoardControl
          pauseOnHover
          showDots={false}
          swipeable
          renderArrowsWhenDisabled={false} // Disable arrow rendering
          customLeftArrow={<div style={{ display: "none" }} />}
          customRightArrow={<div style={{ display: "none" }} />}
          className="tool-list"
          itemClass="carousel-item-spacing" 
        >
          {/* Tool Logos */}
          <div className="box">
            <img src={ToolLogo1} alt="Tool 1" />
          </div>
          <div className="box">
            <img src={ToolLogo2} alt="Tool 2" />
          </div>
          <div className="box">
            <img src={ToolLogo3} alt="Tool 3" />
          </div>
          <div className="box">
            <img src={ToolLogo4} alt="Tool 4" />
          </div>
          <div className="box">
            <img src={ToolLogo5} alt="Tool 5" />
          </div>
          <div className="box">
            <img src={ToolLogo6} alt="Tool 6" />
          </div>
        </Carousel>

        <h2 className="h1-title">
          After attending this webinar, you'll have the tools and confidence to
          achieve{" "}
          <span className="text-pink">
            your goals and build a successful business
          </span>{" "}
          you can be proud of!
        </h2>
        <ul className="list-primary p-0">
          <li>
            <span className="icon"></span>How to identify profitable business
            opportunities.
          </li>
          <li>
            <span className="icon"></span>Crafting a winning product or service
            strategy.
          </li>
          <li>
            <span className="icon"></span>Secrets to building a brand that
            attracts loyal customers.
          </li>
          <li>
            <span className="icon"></span>Marketing on a budget and reaching
            your audience effectively.
          </li>
          <li>
            <span className="icon"></span>Proven steps to scale without stress.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ToolsSlider;
