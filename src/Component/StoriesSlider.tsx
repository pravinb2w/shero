import React from "react";
import Carousel from "react-multi-carousel";
import Story1 from "../Assets/story-image-1.jpg";
import Story2 from "../Assets/story-image-2.jpg";
import Story3 from "../Assets/story-image-3.jpg";
import Story4 from "../Assets/story-image-4.jpg";
import Story5 from "../Assets/story-image-5.jpg";
const StorySlider: React.FC = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      autoPlay={true}
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
      renderArrowsWhenDisabled={true}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      <div className="story-img">
        <img src={Story1} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story2} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story3} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story4} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story5} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story1} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story2} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story3} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story4} className="d-block w-100" alt="Image 1" />
      </div>
      <div className="story-img">
        <img src={Story5} className="d-block w-100" alt="Image 1" />
      </div>
    </Carousel>
  );
};

export default StorySlider;
