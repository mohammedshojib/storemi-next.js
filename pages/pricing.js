import React from "react";
import Layout from "../components/Layout";

const pricing = () => {
  return (
    <Layout title="Pricing">
      <div className="container ">
        <div className="m-aut">
          <h1 className="fw-bold">
            Plans that best suit your business <br /> requirements
          </h1>
        </div>
        <div className="row pricingT">
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <i className="fa fa-adjust"></i>
                <div className="price-value">
                  {" "}
                  $10.00 <span className="month">per month</span>{" "}
                </div>
              </div>
              <h3 className="heading">Standard</h3>
              <div className="pricing-content">
                <ul>
                  <li>
                    <b>50GB</b> Disk Space
                  </li>
                  <li>
                    <b>50</b> Email Accounts
                  </li>
                  <li>
                    <b>50GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>10</b> subdomains
                  </li>
                  <li>
                    <b>15</b> Domains
                  </li>
                </ul>
              </div>
              <div className="pricingTable-signup">
                <a href="#">sign up</a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="pricingTable green">
              <div className="pricingTable-header">
                <i className="fa fa-briefcase"></i>
                <div className="price-value">
                  {" "}
                  $20.00 <span className="month">per month</span>{" "}
                </div>
              </div>
              <h3 className="heading">Business</h3>
              <div className="pricing-content">
                <ul>
                  <li>
                    <b>60GB</b> Disk Space
                  </li>
                  <li>
                    <b>60</b> Email Accounts
                  </li>
                  <li>
                    <b>60GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>15</b> subdomains
                  </li>
                  <li>
                    <b>20</b> Domains
                  </li>
                </ul>
              </div>
              <div className="pricingTable-signup">
                <a href="#">sign up</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="pricingTable blue">
              <div className="pricingTable-header">
                <i className="fa fa-diamond"></i>
                <div className="price-value">
                  {" "}
                  $30.00 <span className="month">per month</span>{" "}
                </div>
              </div>
              <h3 className="heading">Premium</h3>
              <div className="pricing-content">
                <ul>
                  <li>
                    <b>70GB</b> Disk Space
                  </li>
                  <li>
                    <b>70</b> Email Accounts
                  </li>
                  <li>
                    <b>70GB</b> Monthly Bandwidth
                  </li>
                  <li>
                    <b>20</b> subdomains
                  </li>
                  <li>
                    <b>25</b> Domains
                  </li>
                </ul>
              </div>
              <div className="pricingTable-signup">
                <a href="#">sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default pricing;
