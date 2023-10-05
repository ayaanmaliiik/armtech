import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #333;
  color: #fff;
  padding: 4rem 0;
`;

const ContactContainer = styled.div`
  text-align: center;

  .form-group {
    margin: 1rem 0;
  }
  .form-control {
    background-color: #f5f5f5;
  }
`;

const ContactTitle = styled.h1`
  margin: 0 0 4rem 0;
  text-decoration: underline;
`;

const ContactSubTitle = styled.h2`
  margin: 3rem 0;
`;
const ContactIcon = styled.div`
  margin: 1rem;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer className="container">
        <ContactTitle>Contact Me</ContactTitle>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6">
                <ContactIcon>
                  <i className="bi bi-geo-alt h1"></i>
                </ContactIcon>
                <p>
                  <span>Address:</span> Near Al-A-Swad, Tandalja Road, Vadodara
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <ContactIcon>
                  <i className="bi bi-telephone-fill h1"></i>
                </ContactIcon>
                <p>
                  <span>Phone :</span> + 91 9824948451
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <ContactIcon>
                  <i className="bi bi-envelope h1"></i>
                </ContactIcon>
                <p>
                  <span>Email :</span>
                  <ContactLink
                    href="mailto:ayaanmalik.studio@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ayaanmalik.studio@gmail.com
                  </ContactLink>
                </p>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <ContactIcon>
                  <i className="bi bi-globe-americas h1"></i>
                </ContactIcon>
                <span>Website :</span>
                <ContactLink href="#" target="_blank" rel="noopener noreferrer">
                  ayaanmalikstudio.github.io/ArmTech
                </ContactLink>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="">
              <ContactSubTitle></ContactSubTitle>
              <form
                method="POST"
                id="contactForm"
                name="contactForm"
                className="contactForm"
                novalidate="novalidate"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Sent"
                        className="btn btn-danger px-5"
                      />
                      <div className="submitting"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
