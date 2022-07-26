import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { FaStream } from "react-icons/fa";

const Header = () => {
  const Router = useRouter();
  return (
    <header className="header_wrapper">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand fw-bold text-black">Beanmi</a>
          </Link>
          <button
            className="navbar-toggler border-0 text-black pe-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaStream />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      Router.pathname == "/" ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pricing">
                  <a
                    className={
                      Router.pathname == "/pricing"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/product">
                  <a
                    className={
                      Router.pathname == "/product"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Product
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                <Link href="/course">
                  <a className="nav-link learn-more-btn btn-extra-header">
                    Enroll
                  </a>
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link href="/login">
                  <a className="nav-link learn-more-btn">Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
