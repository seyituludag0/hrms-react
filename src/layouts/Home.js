import React from "react";
import banner from "../img/banners/homepagebanner.png";
import userIcon from '../img/icon/user.svg'
import network from '../img/icon/network.svg'
import career from '../img/icon/career.svg'
import businessman from '../img/icon/businessman.svg'
import "../css/style.css";

export default function Home() {
  return (
    <div>
      <div className="img">
        {/* <Image className="imgg"
        src="img/banners/homepagebanner.png"
        style={{
          marginLeft: "60rem",
          width: "50%",
          position: "relative",
          zIndex: "-1",
        }}/> */}
        <img
          src={banner}
          width="100"
          style={{
            marginLeft: "60rem",
            width: "51.2%",
            position: "relative",
            zIndex: "-1",
          }}
          alt=""
        />
        <div
          className="text"
          style={{
            marginTop: "-28rem",
            marginLeft: "-20rem",
            fontSize: "1.5rem",
          }}
        >
          <p style={{ color: "black" }}>
            Hak ettiğiniz 200.000 harika iş teklifimiz var!
          </p>
        </div>

        <div
          className="text"
          style={{
            fontSize: "60px",
            lineHeight: "1.2",
            fontWeight: "900",
            marginLeft: "-17rem",
          }}
        >
          <p style={{ color: "black" }}>Dünyanın En Büyük</p>{" "}
          <p className="asd" style={{ marginLeft: "-21rem", color: "black" }}>
            İş Sitesi
          </p>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------- */}

        <div className="ftco-search" style={{ width: "60rem" }}>
          <div className="row">
            <div className="col-md-12 nav-link-wrap">
              <div
                className="nav nav-pills text-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active mr-md-1"
                  id="v-pills-1-tab"
                  data-toggle="pill"
                  href="#v-pills-1"
                  role="tab"
                  aria-controls="v-pills-1"
                  aria-selected="true"
                >
                  Haydi İş Aramaya Başlayalım
                </a>
              </div>
            </div>
            <div className="col-md-12 tab-wrap">
              <div className="tab-content p-4" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-1"
                  role="tabpanel"
                  aria-labelledby="v-pills-nextgen-tab"
                >
                  <form action="#" className="search-job">
                    <div className="row no-gutters">
                      <div className="col-md mr-md-2">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-briefcase" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="örn: Web Developer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md mr-md-2">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="ion-ios-arrow-down" />
                              </div>
                              <select name id className="form-control">
                                <option value>Category</option>
                                <option value>Full Time</option>
                                <option value>Part Time</option>
                                <option value>Freelance</option>
                                <option value>Internship</option>
                                <option value>Temporary</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md mr-md-2">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-map-marker" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-group">
                          <div className="form-field">
                            <button
                              type="submit"
                              className="form-control btn btn-secondary"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-2"
                  role="tabpanel"
                  aria-labelledby="v-pills-performance-tab"
                >
                  <form action="#" className="search-job">
                    <div className="row">
                      <div className="col-md">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-user" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="eg. Adam Scott"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon">
                                <span className="ion-ios-arrow-down" />
                              </div>
                              <select name id className="form-control">
                                <option value>Category</option>
                                <option value>Full Time</option>
                                <option value>Part Time</option>
                                <option value>Freelance</option>
                                <option value>Internship</option>
                                <option value>Temporary</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="icon">
                              <span className="icon-map-marker" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-group">
                          <div className="form-field">
                            <button
                              type="submit"
                              className="form-control btn btn-secondary"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

        <div
          style={{
            backgroundColor: "#6c63ff",
            width: "110rem",
            height: "410px",
            marginTop: "2rem"
          }}
        >
          <div className="row"> 
            <div className="col-5t" style={{marginLeft: "3rem",marginTop:"8rem"}}>
              <img src={userIcon} style={{width:"5rem"}} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ marginLeft: "4rem", marginTop:"1rem" }}
              >
                Milyonlarca İş Arayın
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p style={{ textAlign: "center", fontFamily: "cursive" }}>
                    İş aramanda yardımcı olabilirim <br />
                    Öncelikle pozisyonunu seçmelisin
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3" style={{marginLeft: "5rem", marginTop:"8rem"}}>
              <img src={network} style={{width:"5rem"}} alt="" />
              <h4 style={{ marginLeft: "3rem", marginTop:"1rem" }}>
              Ağını güçlendirebilirsin
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p style={{ textAlign: "center", fontFamily: "cursive" }}>
                  Böylelikle işverenlere daha çabuk ulaşabilirsin
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3" style={{ marginTop:"8rem"}}>
              <img src={career} style={{width: "5rem"}} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ fontSize: "1.5rem", marginTop:"1rem"}}
              >
                En İyi Kariyere Adım Adım 
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p style={{ textAlign: "center", fontFamily: "cursive" }}>
                    Kariyerinde zirveye doğru adım adım ilerle
                  </p>
                </div>
              </div>
            </div>

             <div className="col-3" style={{marginLeft: "82rem", marginTop:"-11rem"}}>
              <img src={businessman} style={{width: "5rem"}} alt="" />
              <h4
                className="elementor-heading-title elementor-size-default title"
                style={{ fontSize: "1.5rem", marginTop:"1rem"}}
              >
                En İyi Kariyer
              </h4>
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                  <p style={{ textAlign: "center", fontFamily: "cursive" }}>
                    Kiraladığın araç gün içerisinde sana gelsin
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
