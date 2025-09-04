"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import Image from "next/image";

const TestimonialLarge = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const sliderRef = useRef(null);
 
  return (
    <>
      <div className="container">
      <div className="row align-items-center mb-20">
          <div className="col-lg-12 col-md-12">
            <div className="title-style-one text-center text-md-start">
              <h3 className="main-title text-center testiTitle fw-bold tx-dark">
                Hear From People Like You
              </h3>
            </div>
            {/* /.title-style-one */}
          </div>
          
        </div>
       

      
      <div
      id="carouselExampleControls"
      className="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
      <Slider {...settings} ref={sliderRef} arrows={false}>
        <div className="carousel-item text-center">
          <img
            className="rounded-circle shadow-1-strong mb-4"
             src="/images/icon/clientTesti_01.jpg"
            alt="avatar"
            style={{ width: '150px', margin:'auto' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <h5 className="mb-3">R. Verma,Delhi</h5>
              {/* <p>Photographer</p> */}
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                I got the best advice on term insurance and saved over ₹12,000 annually.
                </p>
             
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
          </ul>
        </div>
        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
             src="/images/icon/clientTesti_01.jpg"
            alt="avatar"
            style={{ width: '150px', margin:'auto' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <h5 className="mb-3">A. Kapoor, Pune</h5>
              {/* <p>Photographer</p> */}
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                My investments are finally aligned to my goals, thanks to InsurVest!
                </p>
             
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
          </ul>
        </div>
        <div className="carousel-item">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="/images/icon/clientTesti_01.jpg"
            alt="avatar"
            style={{ width: '150px', margin:'auto' }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <h5 className="mb-3">N. Sharma, Jaipur</h5>
              {/* <p>Photographer</p> */}
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Their claim assistance during a medical emergency was a lifesaver.</p>
             
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
            <li><i className="fas fa-star fa-sm"></i></li>
          </ul>
        </div>
       
        </Slider>
      </div>

    </div>

    <div className="row align-items-center mt-20">
          
          <div className="col-lg-12 col-md-12 ms-auto d-flex justify-content-center">
            <ul className="slider-arrows text-center slick-arrow-one d-flex justify-content-center style-none mb-30">
              <li
                className="prev_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <i className="bi bi-chevron-left" />
              </li>
              <li
                className="next_f1 slick-arrow rounded-circle text-center fs-20 tran3s"
                onClick={() => sliderRef.current.slickNext()}
              >
                <i className="bi bi-chevron-right" />
              </li>
            </ul>
          </div>
        </div>

      </div>
      {/* /.container */}

      
      {/* /.inner-content */}
    </>
  );
};

export default TestimonialLarge;
