import React from 'react'
import imageone from './../../assets/banner/banner1.jpg'
import imagetwo from './../../assets/banner/banner2.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {

    return (
        <div className="banner-area top-pad-60-responsive border-shadow text-center content-less text-large">
            <div id="bootcarousel" className="carousel text-light slide carousel-fade animate_text" data-ride="carousel">
                <div className="carousel-inner carousel-zoom">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showArrows={false}
                        showStatus={false}
                        showIndicators={false}
                        showThumbs={false}
                    >
                        <div className="carousel-item active">
                            <div className="slider-thumb bg-cover">
                                <img src={imageone} alt='thumb' />
                            </div>
                            <div className="box-table">
                                <div className="box-cell shadow dark">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <div className="content">
                                                    <h1 data-animation="animated slideInRight"><strong>Boost Your Productivity and Efficiency with Our Innovative Technology Solutions</strong></h1>
                                                    <p>
                                                        Maximize Your Potential with Technology Solutions Tailored to Your Business Needs.
                                                    </p>
                                                    <a data-animation="animated fadeInUp" className="btn circle btn-light border btn-md" href="#">Start Now</a>
                                                    <a className="popup-youtube relative video-play-button" href="https://www.youtube.com/watch?v=EopfzqbzYmU">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <div className="slider-thumb bg-cover">
                                <img src={imagetwo} alt='thumb' />
                            </div>
                            <div className="box-table">
                                <div className="box-cell shadow dark">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-8 offset-lg-2">
                                                <div className="content">
                                                    <h1 data-animation="animated slideInRight"><strong>Empower Your Business from Warrior Tech Solutions.</strong></h1>
                                                    <p>
                                                        Transform Your Business Operations with our Innovative and Reliable Technology Solutions
                                                    </p>
                                                    <a data-animation="animated fadeInUp" className="btn circle btn-light border btn-md" href="#">Start Now</a>
                                                    <a className="popup-youtube relative video-play-button" href="https://www.youtube.com/watch?v=EopfzqbzYmU">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <a className="left carousel-control light" href="#bootcarousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control light" href="#bootcarousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div >

    )
}

export default Banner