import React from "react";
import banner from "../img/banners/homepagebanner.png";
import businessman from "../img/icon/businessman.svg";
import network from "../img/icon/network.svg";
import userIcon from "../img/icon/user.svg";
import career from "../img/icon/career.svg";
export default function About() {
  return (
    <div>
      <div
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/hrms-project/image/upload/v1623242140/react-hrms/bg_1_pkbh8a.jpg")',
          width: "109rem",
          marginTop: "-5.2rem",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-start">
            <div className="col-md-8 text-center text-md-left mb-5 my-text">
              <p className="breadcrumbs mb-0">
                <span className="mr-3">
                  <a href="index.html">
                    Anasayfa <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>Hakkımızda</span>
              </p>
              <h1 className="mb-3 bread">About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="my-section" style={{ marginLeft: "19rem", marginTop:"5rem" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="intro row text-center justify-content-center">
                <div className="col-md-9">
                  <img className="img-fluid" src={banner} alt="" />
                </div>
                <div className="txt">
                  <h2 className="mb-4">Welcome To HRMS</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country. But nothing
                    the copy said could convince her and so it didn’t take long
                    until a few insidious Copy Writers ambushed her, made her
                    drunk with Longe and Parole and dragged her into their
                    agency, where they abused her for their.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        
      <div
          style={{
            backgroundColor: "#6c63ff",
            width: "110rem",
            height: "410px",
            marginTop: "3rem",
          }}
        >
          <div className="row">
            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={businessman} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ marginTop: "1rem", fontSize: "2.5rem" }}
              >
                435,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    İş
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={network} style={{ width: "5rem" }} alt="" />
              <h4
                style={{
                  marginLeft: "3rem",
                  marginTop: "1rem",
                  fontSize: "2.5rem",
                }}
              >
                40,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Üyeler
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3" style={{ marginTop: "8rem" }}>
              <img src={userIcon} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                30,000
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    CV
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-3"
              style={{ marginLeft: "82rem", marginTop: "-11rem" }}
            >
              <img src={career} style={{ width: "5rem" }} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                10,500
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "cursive",
                      color: "#fff",
                    }}
                  >
                    Şirketler
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
}
