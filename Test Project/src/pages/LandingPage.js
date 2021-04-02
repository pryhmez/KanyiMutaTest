import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Aos from "aos";

import "aos/dist/aos.css";

import Navigation from "../components/Navigation";
import Card from "../components/Cards";
import Apps from "./Apps";
import Footer from "../components/Footer";

import landing from "../assets/banner.svg";
import Button from "../components/Button";

const LandingPage = (props) => {
  const history = useHistory();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const selectThisCard = (service) => {
    history.push({
      pathname: `/slug/${service.slug || service.text}`,
      state: service,
    });
  };

  const navigate = (dest) => {
    history.push({
      pathname: dest,
    });
  };

  return (
    <div className="landing">

      <Navigation />

      <div className="banner">
        <div className=" row">
          <div className="col-md-6 banner-text">
            <h1>can the government be accountable</h1>
            <p data-aos="fade-in" className="word-changer">
              <br />
              <br />
              <br />
              <Button name={"Contact us"} />
            </p>
          </div>
          <div data-aos="fade-in" className="banner-img col-md-6">
            <img src={landing} />
          </div>
        </div>
      </div>

      <div className="aspect">
        <h1 style={{ textAlign: "center", fontSize: "2.5rem" }}>OUR AREAS</h1>
        <p style={{ fontSize: "0.95rem", color: "grey", textAlign: "center" }}>
          {" "}
          The three main areas for TAS operations
        </p>
        <div className="aspect-cont container">
          <div data-aos="fade-down" className="aspect-text">
            <h1>GOVERNMENT</h1>
            <p>
              Helping to improve the Governments efficiency of operation using
              technology and to ease the process of governance in the country.
            </p>
            <Button>Go to government</Button>
          </div>
          <div data-aos="fade-up" className="aspect-img">
            {/* <img src={community} /> */}
            <img src={"assets/blackgovernment.jpg"} />
          </div>
        </div>

        <div className="aspect-cont container">
          <div data-aos="fade-down" className="aspect-img">
            {/* <img src={business} /> */}
            <img src={"assets/blackbusiness.jpeg"} />
          </div>
          <div data-aos="fade-up" className="aspect-text">
            <h1>BUSINESS</h1>
            <p>
              our business model that ensures a proper blend of private sector
              expertise and resources and public sector data for effective and
              efficient Service Delivery with focus on sustainability.
            </p>
            <Button
              click={() => {
                navigate("business");
              }}
            >
              Go to business
            </Button>
          </div>
        </div>

        <div className="aspect-cont container">
          <div data-aos="fade-down" className="aspect-text">
            <h1>CITIZENS</h1>
            <p>
              The citizens are meant to be aware of what the government is doing
              at all times and also influence the decisions of the government.
              TAS gives citizens the power to be aware of the governments
              actions.
            </p>
            <Button>Go to citizenship page</Button>
          </div>
          <div data-aos="fade-up" className="aspect-img">
            {/* <img src={citizens} /> */}
            <img src={"assets/blackcitizen.jpg"} />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default connect()(LandingPage);
