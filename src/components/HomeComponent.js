import React, { Component } from "react";
import { Row, Col, CardBody, CardTitle, CardText } from "reactstrap";
import { withRouter } from "react-router-dom";
import ResponsivePlayer from "./Responsiveplayer";

class Home extends Component {
  render() {
    const Welcome = () => {
      return (
        <div className="landing__welcome">
          <div className="landing__welcome__title">
            <Row>
              <Col className="center">
                <img
                  src="chainlogo.svg"
                  alt="logo"
                  className="landing__welcome__logo"
                ></img>
              </Col>
            </Row>
          </div>
          <Row>
            <Col
              sm={{ size: 5, order: 6 }}
              className="landing__welcome__content"
            >
              <h2 className="landing__welcome__desc">
                Help stop the spread of COVID-19 through community-driven
                contact tracing
              </h2>
            </Col>
            <Col sm={{ size: 5, offset: 1 }}>
              <ResponsivePlayer url="https://www.youtube.com/watch?v=UjtOGPJ0URM" />
            </Col>
          </Row>
          <Row className="center">
            <Col className="landing__welcome__download">
              <a href="#">
                <img
                  src="https://www.smartuse.com/wp-content/uploads/2019/08/Google-Play-Icon.png"
                  className="landing__welcome__download-btn"
                  alt="download_button"
                ></img>
              </a>
              <a href="#">
                <img
                  src="https://eatcopperbranch.com/wp-content/uploads/2018/09/apple-app-store-icon-e1485370451143.png"
                  className="landing__welcome__download-btn"
                  alt="download_button"
                ></img>
              </a>
            </Col>
          </Row>
        </div>
      );
    };

    const WhyChain = () => {
      return (
        <div className="section">
          <Row>
            <Col sm="12">
              <h2 className="landing__why-chain__title ">Why Chain?</h2>
            </Col>
            <Col sm={{ size: 10, offset: 1 }}>
              <Row>
                <Col sm="4">
                  <CardBody>
                    <div className="card-img-center">
                      <img
                        width="233px"
                        height="196px"
                        src="Image1.png"
                        alt="img"
                      ></img>
                    </div>
                    <CardTitle>Protect ourselves</CardTitle>
                    <CardText>
                      If you had close contact with a COVID-19 case, whether or
                      not you know the person, Chain helps contact tracers call
                      you more quickly.
                    </CardText>
                  </CardBody>
                </Col>
                <Col sm="4">
                  <CardBody>
                    <div className="card-img-center">
                      <img
                        width="243px"
                        height="196px"
                        src="Image2.png"
                        alt="img"
                      ></img>
                    </div>
                    <CardTitle>Protect our loved ones</CardTitle>
                    <CardText>
                      Being contacted earlier allows us to better protect those
                      around us, reducing the spread of COVID-19.
                    </CardText>
                  </CardBody>
                </Col>
                <Col sm="4">
                  <CardBody>
                    <div className="card-img-center">
                      <img
                        width="272px"
                        height="196px"
                        src="Image1.png"
                        alt="img"
                      ></img>
                    </div>
                    <CardTitle>Protect our community</CardTitle>
                    <CardText>
                      Chain makes it faster to complete contact tracing on a
                      national level. When more people use it, we will be safer
                      together.
                    </CardText>
                  </CardBody>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      );
    };

    const Content = () => {
      return (
        <div className="landing__content__wrapper">
          <Row className="section">
            <Col sm={{ size: 6, offset: 3 }}>
              <h4 className="landing__content__title">Your Privacy</h4>
              <p>
                Iterative approaches to corporate strategy foster collaborative
                thinking to further the overall value proposition. Organically
                grow the holistic world view of disruptive innovation via
                workplace diversity and empowerment.
              </p>
              <p>
                At the end of the day, going forward, a new normal that has
                evolved from generation X is on the runway heading towards a
                streamlined cloud solution. User generated content in real-time
                will have multiple touchpoints for offshoring.
              </p>
              <p>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </p>
            </Col>
          </Row>

          <Row className="landing__content__text-wrapper">
            <Col sm={{ size: 6, offset: 3 }}>
              <h4 className="landing__content__title">FAQs</h4>
              <p>
                <a href="#">What is Chain?</a>
              </p>
              <p>
                <a href="#">What is contact tracing?</a>
              </p>
              <p>
                <a href="#">How does Chain work?</a>
              </p>
              <p>
                <a href="#">
                  Why does Chain need Location Permission on Android?
                </a>
              </p>
              <p>
                <a href="#">
                  What data is collected? Are you able to see my personal data?
                </a>
              </p>
              <p>
                <a href="#">How is my data protected?</a>
              </p>
              <p>
                <a href="#">How can I stop sharing my data?</a>
              </p>
              <p>
                <a href="#">
                  How does Chain complement current contact tracing efforts?
                </a>
              </p>
              <p>
                <a href="#">Who built Chain?</a>
              </p>
            </Col>
          </Row>

          <Row className="landing__content__text-wrapper">
            <Col sm={{ size: 6, offset: 3 }}>
              <h4 className="landing__content__title">Useful Links</h4>
              <p>
                <a href="#">WHO - Coronavirus disease (COVID-19) outbreak</a>
              </p>
              <p>
                <a href="#">
                  Goverment of Canada Coronavirus disease (COVID-19)
                </a>
              </p>
              <p>
                <a href="#">CDC - Coronavirus Disease 2019 (COVID-19)</a>
              </p>
            </Col>
          </Row>
        </div>
      );
    };

    const Footer = () => {
      return (
        <div className="landing__footer">
          <Row>
            <Col className="landing__footer__title__wrapper">
              <h2 className="center landing__footer__title">
                Download Chain now! And help others set it up.
              </h2>
            </Col>
          </Row>

          <Row className="center">
            <Col className="landing__footer__download">
              <a href="#">
                <img
                  src="https://www.smartuse.com/wp-content/uploads/2019/08/Google-Play-Icon.png"
                  className="landing__welcome__download-btn"
                  alt="download_button"
                ></img>
              </a>
              <a href="#">
                <img
                  src="https://eatcopperbranch.com/wp-content/uploads/2018/09/apple-app-store-icon-e1485370451143.png"
                  className="landing__welcome__download-btn"
                  alt="download_button"
                ></img>
              </a>
            </Col>
          </Row>

          <p className="center">
            Copyright © 2020 Upfeat Media, Inc.
            <span className="landing__footer__terms">
              <a href="#"> Terms of Service</a>
            </span>
            <span class="vertical-line">|</span>
            <span className="landing__footer__terms">
              <a href="#">Privacy Policy</a>
            </span>
          </p>
        </div>
      );
    };

    return (
      <>
        <Welcome />
        <WhyChain />
        <Content />
        <Footer />
      </>
    );
  }
}

export default withRouter(Home);
