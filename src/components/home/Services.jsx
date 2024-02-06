import React from "react";
import service1 from "./../../assets/services/service-1.jpg";
import service2 from "./../../assets/services/service-2.jpg";
import service3 from "./../../assets/services/service-3.jpg";
import service4 from "./../../assets/services/service-4.jpg";
import service5 from "./../../assets/services/service-5.jpg";
import service8 from "./../../assets/services/service-8.png";
import "../css/Service.css";
import Carousel from "react-multi-carousel";

function Services() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="service-area half-bg overflow-hidden default-padding-top">
      <div className="container">
        <div className="heading-left">
          <div className="row">
            <div className="col-lg-6">
              <h5>15 years of experience</h5>
              <h2>Offer The Latest Software And Solutions To Our customers!</h2>
            </div>
            <div className="col-lg-6">
              <p>
                Everything melancholy uncommonly but solicitude inhabiting
                projection off. Connection stimulated estimating excellence an
                to impression. Lasted my coming uneasy marked so should. Gravity
                letters it amongst herself dearest an windows by. Wooded ladies
                she basket season.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-box text-light">
          <div class="row">
            <div class="service col-md-12">
              <div class="heading wow fadeInUp">
                <h2>Our Services</h2>
                <h3>
                  Our team always provides quality services to our valuable
                  clients
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service col-md-12 react-multi-carousel">
              <Carousel
                responsive={responsive}
                autoPlay
                infiniteLoop
                showDots={true}
              >
                <div className="item">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">
                      <img src={service1} alt="" />
                    </a>
                  </div>
                  <div className="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">
                        Web Development
                      </a>
                    </h4>
                    <p>
                      We offer custom web development services that are tailored
                      to meet the specific needs of our clients.
                    </p>
                    <div className="read-more">
                      <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item ">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/mobile app developers can create custom mobile apps">
                      <img src={service2} alt="" />
                    </a>
                  </div>
                  <div className="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/mobile app developers can create custom mobile apps">
                        Mobile App Development
                      </a>
                    </h4>
                    <p>
                      Our team of expert mobile app developers can create custom
                      mobile apps for iOS and Android platforms
                    </p>
                    <div className="read-more">
                      <a href="https://www.warriortechsolutions.in/service/mobile app developers can create custom mobile apps">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item ">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/Business Management services">
                      <img src={service3} alt="" />
                    </a>
                  </div>
                  <div class="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/Business Management Software">
                        BMS
                      </a>
                    </h4>
                    <p>
                      BMS stands for Business Management Software. It is an
                      all-in-one software solution designed to help businesses
                      streamline their operations and increase efficiency.
                    </p>
                    <div class="read-more">
                      <a href="https://www.warriortechsolutions.in/service/Business Management Software">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item ">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/quality-assurance">
                      <img src={service4} alt="" />
                    </a>
                  </div>
                  <div class="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/quality-assurance">
                        Consulting and Business process
                      </a>
                    </h4>
                    <p>
                      Warrior Tech Solutions offers Consulting and Business
                      Process Services to help businesses optimize their
                      operations and achieve their goals.
                    </p>
                    <div class="read-more">
                      <a href="https://www.warriortechsolutions.in/service/quality-assurance">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item ">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/We offer a range of domain and hosting services">
                      <img src={service5} alt="" />
                    </a>
                  </div>
                  <div class="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/we offer a range of domain and hosting services">
                        Domains and Web Hosting
                      </a>
                    </h4>
                    <p>
                      At Warrior Tech Solutions, we offer a range of domain and
                      hosting services to help businesses establish and maintain
                      their online presence. Our domains and hosting services
                      include:
                    </p>
                    <div class="read-more">
                      <a href="https://www.warriortechsolutions.in/service/we offer a range of domain and hosting services">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="item ">
                  <div className="photo">
                    <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">
                      <img src={service8} alt="" />
                    </a>
                  </div>
                  <div class="text">
                    <h4>
                      <a href="https://www.warriortechsolutions.in/service/Business WhatsApp API">
                        Business WhatsApp API
                      </a>
                    </h4>
                    <p>
                      Our Business WhatsApp API product allows businesses to
                      connect with their customers on the world&#039;s most
                      popular messaging app.
                    </p>
                    <div class="read-more">
                      <a href="https://www.warriortechsolutions.in/service/Business WhatsApp API">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
