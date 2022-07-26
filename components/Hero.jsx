import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <Layout>
      <>
        <section id="main" className="banner_wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 ">
                <Image
                  src="/hero.svg"
                  height="600px"
                  width="600px"
                  className="img-fluid"
                  alt="Banner"
                />
              </div>
              <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                <p className="banner-subtitle">
                  Complete Buissness Development course
                </p>
                <h1 className="banner-title">
                  <span>E-commerce</span> platform for growing businesses.
                </h1>
                <p className="banner-title-text">
                  Launch, scale and manage your business with Dukaan’s
                  all-in-one commerce platform.
                </p>
                <div className="learn-more-btn-section">
                  <Link href="/course">
                    <a className="nav-link learn-more-btn btn-header">
                      Enroll Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <p className="features_subtitle">
                  Lets start a another journey
                </p>
                <h2 className="features_title">
                  Endless opportunities for growth with an entire platform
                  behind you.
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-1">
                  <h3>Marketing</h3>
                  <p className="features_text">
                    6 ways of marketing, free matketing, paid marketing, meme
                    marketing, influencer marketing, pre forced marketing, free
                    influencer marketing,
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-2">
                  <h3>In-Depth Analytics</h3>
                  <p className="features_text">
                    No hidden lists. Be on top of your sales and customers with
                    full data visibility built right into your dashboards.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-3">
                  <h3>Ecommerce Development</h3>
                  <p className="features_text">
                    No installation hassle, just purchase and you are ready to
                    start selling in no time. Its beautiful user interface is
                    very intuitive.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-4">
                  <h3>Payment Gateway Integrations</h3>
                  <p className="features_text">
                    Get more sales, by offering seamless and easy payment
                    options on your online store with Dukaan.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-5">
                  <h3>Staff accounts</h3>
                  <p className="features_text">
                    Add employees, colleagues and teammates to help you grow
                    your business while giving access to only what they need.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-5">
                <div className="ft-6 ">
                  <h3>Android / iOS App</h3>
                  <p className="features_text pb-4">
                    Get more loyal customers by getting your own mobile app and
                    letting them buy directly from it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about_wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-5 text-center text-lg-start">
                <p className="about_number">1</p>
                <h2 className="about_title">Launch Fast</h2>

                <ul className="about_text text-left">
                  <li>Fully responsive e-commerce website & mobile app.</li>
                  <li>
                    Loads 6X faster than existing solutions. Upload/import
                  </li>
                  <li>
                    products and inventory in bulk. Integrate payment gateways.
                  </li>
                  <li>Easily customizable themes.</li>
                </ul>
                <div className="my-5">
                  <a className="learn-more-btn" href="#innovate">
                    Login Now
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-lg-7 text-center text-md-start">
                <Image
                  src="/lounch.svg"
                  height="600px"
                  width="600px"
                  className="img-fluid"
                  alt="Banner"
                />
              </div>
            </div>
          </div>

          <div className="innovate mt-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                  <Image
                    src="/scal.svg"
                    height="600px"
                    width="600px"
                    className="img-fluid"
                    alt="Banner"
                  />
                </div>
                <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                  <p className="about_number">2</p>
                  <h2 className="about_title">Scale Faster</h2>
                  <ul className="about_text text-left">
                    <li>our store will have 99.5% uptime.</li>
                    <li>45+ third party plugins.</li>
                    <li>Add staff accounts, assign different roles.</li>
                    <li>Unlimited transactions, 0% transaction fees.</li>
                  </ul>
                  <div className="mt-5">
                    <a className="learn-more-btn btn-header" href="#main">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="faq_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <p className="faq_subtitle">Were here to help</p>
                <h2 className="faq_title">Frequently asked questions</h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-8 mb-5 mb-lg-0">
                <div
                  className="accordion accordion-flush"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        1. What is Storemi and how does it work?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Storemi is an easy-to-use platform to run, manage and
                        grow your business online from desktop and mobile. You
                        can create your online store, add products, manage
                        inventory, accept online payments, and do much more.
                        It’s the simple and fastest way to take your business to
                        next level.
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
                        2. Do I need to be technically savvy to use Storemi?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        No, you don’t need to be technically skilled to run an
                        online business on Dukaan. Dukaan makes it easy for you
                        to launch an online business and grow it using a suite
                        of marketing tools and plugins.
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
                        3. Is Storemi free to use?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can start the 7-day free trial and explore. Once the
                        trial expires, you can choose a{" "}
                        <span>
                          {" "}
                          <Link href="/pricing">
                            <a>pricing plan</a>
                          </Link>
                        </span>{" "}
                        that suits your business needs.
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
                        4. Can I use my own domain with Storemi?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, you can connect your domain name with Storemi. You
                        can also purchase premium domain names by paying
                        additional fees.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        5. Can I accept online payments?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, you can accept online payments from your customers.
                        Dukaan also allows you to integrate with SSLCOMMERZ and
                        any payment to accept online payments.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-expanded="false"
                        aria-controls="collapse6"
                      >
                        6. Can I customize my online store?
                      </button>
                    </h2>
                    <div
                      id="collapse6"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading6"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes, you can customize your online store. You can choose
                        from a range of themes that match your brand and make
                        your store stand out. You can read more about it here
                        and here.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <Image
                  src="/faq.svg"
                  height="300px"
                  width="300px"
                  className="img-fluid"
                  alt="Banner"
                />
              </div>
            </div>
          </div>

          <div className="free_trial">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                  <h2 className="free_title">Ready to Chang the game</h2>
                </div>
                <div className="col-sm-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
                  <a className="learn-more-btn" href="#main">
                    <FaRocket /> Enroll
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Hero;
