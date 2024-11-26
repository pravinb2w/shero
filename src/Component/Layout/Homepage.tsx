import React from "react";
import Header from "../Layout/Header.tsx";
import IconCalendar from "../../Assets/icon-calendar.svg";
import IconClock from "../../Assets/icon-clock.svg";
import IconMember1 from "../../Assets/member-1.svg";
import IconMember2 from "../../Assets/member-2.svg";
import IconMember3 from "../../Assets/member-3.svg";
import MainSectionImage from "../../Assets/main-sec-pic.svg";
import ImgSkills from '../../Assets/skill-img.svg';
import StickyFooter from "./StickyFooter.tsx";

const Homepage = () => {

  return (
    <div className="wrapper">
      <StickyFooter />
      <section className="section-main">
        <div className="container p-0">
          <Header />
          <div className="row sec-inner">
            <div className="col-md-6">
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

              <button className="btn btn-primary">Join our program</button>
              <div className="member-info r-start gap-2">
                <div className="r-start">
                  <div className="rounded-circle overflow-hidden">
                    <img
                      src={IconMember1}
                      alt="User 1"
                      className="w-100 h-100"
                    />
                  </div>
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{
                      transform: "translateX(calc(-1 * var(--size-10)))",
                    }}
                  >
                    <img
                      src={IconMember2}
                      alt="User 2"
                      className="w-100 h-100"
                    />
                  </div>
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{
                      transform: "translateX(calc(-1 * var(--size-20)))",
                    }}
                  >
                    <img
                      src={IconMember3}
                      alt="User 3"
                      className="w-100 h-100"
                    />
                  </div>
                </div>
                <h4 className="font-normal">1000+ Members joined</h4>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ position: "relative", top: "-30px" }}>
                <img src={MainSectionImage} alt="" />
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
                  <h1>1000+</h1>
                  <h4>Conference ticket confirmed</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sec-inner">
                  <h1>8+</h1>
                  <h4>Powered partner speakers</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sec-inner">
                  <h1>1000+</h1>
                  <h4>Participates from different countries</h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sec-inner">
                  <h1>10+</h1>
                  <h4>Sponsored from big company</h4>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="sec-three-webinar">
      <div className="container-fluid webinar-details">
          <h1 className="text-center font-madefor-display">
            Who is this <span className="highlight">webinar</span> for?
          </h1>
          <div className="row">
            <div className="col-md-2"></div>
              <div className="col-md-2 webinar-box">
                <div className="webinar-content">
                  <h3 className='gradient-outline'>01</h3>
                  <p>You have a great product or idea but struggle to generate consistent profits.</p>
                </div>
              </div>
              <div className="col-md-2 webinar-box">
                <div className="webinar-content">
                  <h3 className='gradient-outline'>02</h3>
                  <p>You’re ready to break free from financial dependence and create your own income.</p>
                </div>
              </div>
              <div className="col-md-2 webinar-box">
                <div className="webinar-content">
                  <h3 className='gradient-outline'>03</h3>
                  <p>You’re juggling family and ambition but lack the tools to balance both.</p>
                </div>
              </div>
              <div className="col-md-2 webinar-box">
                <div className="webinar-content">
                  <h3 className='gradient-outline'>04</h3>
                  <p>You want practical, actionable business guidance tailored for women.</p>
                </div>
              </div>
              <div className="col-md-2 webinar-box">
                <div className="webinar-content">
                  <h3 className='gradient-outline'>05</h3>
                  <p>You dream of building something that lasts while staying true to your values.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className='sec-four-keyskills bg-light'>
            <div className="container">
              <div className="row r-center">
                <div className="col-md-6">
                  <h1>Master key business skills for building a <span className="text-pink">successful business!</span></h1>
                  <ul className='list-primary m-0 p-0'>
                    <li><span className='icon'></span>How to identify profitable business opportunities.</li>
                    <li><span className='icon'></span>Crafting a winning product or service strategy.</li>
                    <li><span className='icon'></span>Secrets to building a brand that attracts loyal customers.</li>
                    <li><span className='icon'></span>Marketing on a budget and reaching your audience effectively.</li>
                    <li><span className='icon'></span>Proven steps to scale without stress.</li>
                  </ul>
                </div>
                <div className="col-md-6 text-right">
                  <img src={ImgSkills} alt='' />
                </div>
              </div>
            </div>
      </section>

      <section className='sec-five-tools bg-dark'>
            <div className="container">
                  <h1 className="text-white">You will learn these powerful tools for business growth</h1>
              <div className="row r-center">
                <div className="col-md-6">
                  <ul className='list-secondary m-0 p-0'>
                    <li><span className='icon'></span>How to identify profitable business opportunities.</li>
                    <li><span className='icon'></span>Crafting a winning product or service strategy.</li>
                    <li><span className='icon'></span>Secrets to building a brand that attracts loyal customers.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className='list-secondary m-0 p-0'>
                    <li><span className='icon'></span>How to identify profitable business opportunities.</li>
                    <li><span className='icon'></span>Crafting a winning product or service strategy.</li>
                    <li><span className='icon'></span>Secrets to building a brand that attracts loyal customers.</li>
                  </ul>
                </div>
              </div>
            </div>
      </section>
    </div>
  );
};

export default Homepage;
