import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="footer_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h3 className="footer_title">Beanmi</h3>
            <p className="footer_text">
              Beanmi maked first buissness development course in bangladesh.
            </p>
          </div>
          <div className="col-lg-4 px-lg-5 mb-4 mb-lg-0">
            <h3 className="footer_title">Contact</h3>
            <p className="footer_text">
              <a href="#">asmdshojib11@gmail.com</a>
              <br />
              <a href="#" className="footer-address">
                Nazir road <br />
                Feni sadar feni
              </a>
            </p>
          </div>
          <div className="col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer_title">Social Media</h3>
            <p>
              <a href="#" className="footer_social_media_icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer_social_media_icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer_social_media_icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="footer_social_media_icon">
                <i className="fab fa-dribbble"></i>
              </a>
            </p>
          </div>
          <div className="col-12 footer_credits text-center">
            <span>
              © 2021
              <a href="#" target="_blank" title="Code4education">
                SHOJIB
              </a>
              ™. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
