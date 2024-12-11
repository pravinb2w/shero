import React from "react";
import Header from "../Layout/Header.tsx";
import IconCalendar from "../../Assets/icon-calendar.svg";
import IconClock from "../../Assets/icon-clock.svg";
import IconMember1 from "../../Assets/member-1.svg";
import IconMember2 from "../../Assets/member-2.svg";
import IconMember3 from "../../Assets/member-3.svg";
import MainSectionImage from "../../Assets/main-sec-pic.svg";
import ImgSkills from "../../Assets/skill-img.svg";
import StickyFooter from "./StickyFooter.tsx";

import ImgEbook from "../../Assets/icon-ebook.svg";
import ImgMeenChabbira from "../../Assets/meena-chabbira.svg";
import JoinProgram from "./JoinProgram.tsx";
import { Modal } from "bootstrap";


import CarouselSlider from "./CarouselSlider.tsx";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import StorySlider from "../StoriesSlider.tsx";
import Carousel from "react-multi-carousel";
import WebinarSlider from "./Webinar.tsx";
import ToolsSlider from "../ToolsSlider.tsx";

const Homepage = () => {

  const openForm = () => {
    const modalElement = document.getElementById("exampleModal");
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
      modalInstance.show();
    }
  }
  return (
    <div className="wrapper">
      <JoinProgram />
      <StickyFooter openForm={openForm} />
      <section className="section-main">
        <div className="container p-0">
          <Header openForm={openForm} />
          <div className="row sec-inner">
            <div className="col-12 col-md-6">
              <div className="left-inner">
                <h1 className="fw-bold mb-3 text-light">
                  Turn Your Ambitions Into Achievements! Join the Ultimate{" "}
                  <span className="text-pink">
                    Business Transformation Webinar{" "}
                  </span>
                  for Women Entrepreneurs!
                </h1>
                <div className="r-start my-4 icons-sm icons-sm-group">
                  <div className="d-flex">
                    <img src={IconCalendar} alt="" />
                    <h4 className="ms-2 font-normal">12 Nov 2024</h4>
                  </div>
                  <div className="d-flex">
                    <img src={IconClock} alt="" />
                    <h4 className="ms-2 font-normal">9:30 am (IST)</h4>
                  </div>
                </div>

                <h4 className="mb-4 font-normal">
                  Turn Opportunity into Action – Sign Up for Free Now!
                </h4>
                <button
                  className="btn btn-primary"
                  onClick={openForm}
                >
                  Join our program
                </button>
                <div className="member-info r-start gap-2">
                  <div className="r-start">
                    <div className="rounded-circle overflow-hidden">
                      <img src={IconMember1} alt="User 1" />
                    </div>
                    <div
                      className="rounded-circle overflow-hidden"
                      style={{
                        transform: "translateX(calc(-1 * var(--size-10)))",
                      }}
                    >
                      <img src={IconMember2} alt="User 2" />
                    </div>
                    <div
                      className="rounded-circle overflow-hidden"
                      style={{
                        transform: "translateX(calc(-1 * var(--size-20)))",
                      }}
                    >
                      <img src={IconMember3} alt="User 3" />
                    </div>
                  </div>
                  <h4 className="font-normal">1000+ Members joined</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-right">
              <div className="main-image-align">
                <img src={MainSectionImage} alt="" className="feature-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-two-counter webinar-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sec-inner">
                <h2 className="h1-title font-bold text-pink">1000+</h2>
                <h4>Conference ticket confirmed</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec-inner">
                <h2 className="h1-title font-bold text-pink">8+</h2>
                <h4>Powered partner speakers</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec-inner">
                <h2 className="h1-title font-bold text-pink">1000+</h2>
                <h4>Participates from different countries</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sec-inner">
                <h2 className="h1-title font-bold text-pink">10+</h2>
                <h4>Sponsored from big company</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-three-webinar">
        <div className="container">
          <h2 className="text-center font-bold font-madefor-display">
            Who is this <span className="text-pink">webinar</span> for?
          </h2>
        </div>
        <div className="testimonial-carousel">
          <WebinarSlider />
        </div>
      </section>

      <section className="sec-four-keyskills bg-light">
        <div className="container p-0">
          <div className="row r-center">
            <div className="col-md-6">
              <h2 className="h1-title">
                Master key business skills for building a{" "}
                <span className="text-pink">successful business!</span>
              </h2>
              <img
                src={ImgSkills}
                alt=""
                className="d-block d-md-none right-image mb-5 pb-5"
              />
              <ul className="list-primary m-0 p-0">
                <li>
                  <span className="icon"></span>How to identify profitable
                  business opportunities.
                </li>
                <li>
                  <span className="icon"></span>Crafting a winning product or
                  service strategy.
                </li>
                <li>
                  <span className="icon"></span>Secrets to building a brand that
                  attracts loyal customers.
                </li>
                <li>
                  <span className="icon"></span>Marketing on a budget and
                  reaching your audience effectively.
                </li>
                <li>
                  <span className="icon"></span>Proven steps to scale without
                  stress.
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <img
                src={ImgSkills}
                alt=""
                className="d-none d-md-block right-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-five-tools bg-dark">
        <div className="container p-0">
          <h2 className="text-white h1-title">
            You will learn these powerful tools
            <br />
            for business growth
          </h2>
          <div className="row r-center">
            <div className="col-md-6">
              <ul className="list-secondary m-0 p-0">
                <li>
                  <span className="icon"></span>
                  <h4>
                    Proven time management techniques to scale efficiently
                  </h4>
                </li>
                <li>
                  <span className="icon"></span>
                  <h4>
                    Strategic frameworks for smarter decisions and better
                    outcomes
                  </h4>
                </li>
                <li>
                  <span className="icon"></span>
                  <h4>
                    Methods to optimize your digital presence, including
                    LinkedIn & personal websites
                  </h4>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-secondary m-0 p-0">
                <li>
                  <span className="icon"></span>
                  <h4>Strategies to manage finances and maximize profits</h4>
                </li>
                <li>
                  <span className="icon"></span>
                  <h4>
                    Templates and quick-start guides for immediate action and
                    results
                  </h4>
                </li>
                <li>
                  <span className="icon"></span>
                  <h4>
                    Stress management and work-life balance practices to keep
                    you focused
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     <ToolsSlider />

      <section className="sec-seven-stories bg-dark text-center">
        <div className="container-fluid">
          <h1 className="text-white mb-5">
            Meet the <span className="text-pink">Sheros</span> who rewrote
            <br />
            their <span className="text-pink">success stories</span>
          </h1>
          <StorySlider />
        </div>
      </section>

      <section className="container-fluid bg-light sec-eight-testimonial">
        <div className="container-fluid">
          <h2 className='h1-title text-center mb-5 pb-5'>Testimonial</h2>
          <CarouselSlider />
        </div>
      </section>

      <div className=""></div>

      <section className="sec-nine-plans bg-dark text-center">
        <div className="container p-0">
          <h2 className="text-white h1-title">
            Additional <span className="text-pink">bonus resources</span> on
            <br />
            registration before (time period)
          </h2>
          <div className="row plan-info">
            <div className="col-md-6">
              <div className="plans">
                <img src={ImgEbook} alt="" />
                <h3 style={{ paddingTop: "var(--size-25)" }}>
                  UNSTOPPABLE"
                  <br />
                  E-BOOK
                </h3>
                <h3>₹999 - Yours FREE</h3>
                <h4 className="font-normal">
                  Your ultimate guide to unlocking confidence, resilience, and
                  success. This empowering e-book equips you with tools to
                  overcome challenges and become truly unstoppable
                </h4>
                <button className="btn btn-primary"  >Buy now</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="plans">
                <img src={ImgEbook} alt="" />
                <h3 style={{ paddingTop: "var(--size-25)" }}>
                  THE STRENGTH FINDER EXERCISE
                </h3>
                <h3>₹4999 - Yours FREE</h3>
                <h4 className="font-normal">
                  This revolutionary assessment tool has been developed through
                  years of research and real-world application.
                </h4>
                <button className="btn btn-primary"  >Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-ten-faq text-center">
        <div className="container">
          <h2 className="font-bold h1-title">
            <span className="text-pink">Got questions?</span> We’ve got answers
          </h2>
          <div className="accordion" id="faq">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Who is this webinar for{" "}?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faq"
              >
                <div className="accordion-body">
                  This webinar is designed for women who are ready to take
                  charge of their careers or businesses, want practical,
                  actionable strategies, and are committed to growing personally
                  and professionally. Whether you’re just starting out or
                  looking to take your existing business to the next level, this
                  webinar is for you.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Do I need prior business experience to join?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faq"
              >
                <div className="accordion-body">
                  No, prior business experience is not required. This webinar is
                  suitable for both beginners and experienced entrepreneurs.
                  It’s designed to give you practical strategies to help you
                  move forward regardless of your experience level.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What if I can't attend live?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faq"
              >
                <div className="accordion-body">
                  Don't worry! The webinar will be recorded, and you'll have
                  access to the replay and any resources shared during the
                  session. You can watch it at your convenience.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How long is the webinar?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faq"
              >
                <div className="accordion-body">
                  The webinar is approximately 1 hour long, with time for
                  questions and answers at the end. Make sure to join on time to
                  get the most out of the session!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-eleven-about bg-light">
        <div className="container p-0">
          <div className="row r-center">
            <div className="col-md-7">
              <h2 className="h1-title">
                Meet your Host
                <br />
                <span className="text-pink">Ms. Meena Chabbria</span>
              </h2>
              <img
                src={ImgMeenChabbira}
                alt=""
                className="d-block d-md-none right-image mb-5 pb-2"
              />
              <ul className="list-secondary m-0 p-0">
                <li>
                  <span className="icon"></span>
                  <p>
                    A seasoned entrepreneur with 15+ years of leadership
                    excellence.
                  </p>
                </li>
                <li>
                  <span className="icon"></span>
                  <p>
                    Alumni of UCLA, IIM Raipur, and ISB, with expertise in
                    global business strategies.
                  </p>
                </li>
                <li>
                  <span className="icon"></span>
                  <p>Successfully mentored 500+ women entrepreneurs.</p>
                </li>
                <li>
                  <span className="icon"></span>
                  <p>
                    On a mission to empower 100,000 women to become global
                    leaders
                  </p>
                </li>
                <li>
                  <span className="icon"></span>
                  <p>
                    On a mission to empower 100,000 women to become global
                    leaders
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-md-5 text-right">
              <img
                src={ImgMeenChabbira}
                alt=""
                className="d-none d-md-block right-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
