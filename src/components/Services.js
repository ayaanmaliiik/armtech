import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  background-color: #fff;
  padding: 5rem 0.5rem;
`;

const ServicesContainer = styled.div`
  text-align: center;
`;

const ServiceTitle = styled.h1`
  margin: 0 0 4rem 0;
  text-decoration:underline;
`;

const ServiceSubTitle = styled.h2`
  margin: 0 0 3rem 0;
`;

const ServiceContent = styled.p`
  text-align: justify;
`;

const ServiceContentHighlighter = styled.span`
  color:red;
  font-weight:bold;
`;

const Services = () => {
  return (
    <ServicesSection id="services">
    <ServicesContainer className="container">
      <ServiceTitle>My Services</ServiceTitle>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
            <ServiceSubTitle>Web Development</ServiceSubTitle>
            <ServiceContent>
              Web development involves creating websites and web apps using
              <ServiceContentHighlighter> HTML, CSS, and JavaScript </ServiceContentHighlighter>for front-end design. Back-end
              development manages server-side processes and databases, typically
              using languages like <ServiceContentHighlighter>Python or PHP</ServiceContentHighlighter>. Frameworks like <ServiceContentHighlighter>React and
              Django </ServiceContentHighlighter>simplify development. Hosting, security, and continuous
              learning are crucial aspects. Focus on responsive design and
              optimization for a well-rounded skillset.
            </ServiceContent>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
            <ServiceSubTitle>Web Designing</ServiceSubTitle>
            <ServiceContent>
              Our web design services encompass cutting-edge design principles
              to create visually appealing and user-friendly websites. We
              specialize in responsive design, ensuring your site looks perfect
              on all devices. Our team combines <ServiceContentHighlighter>HTML, CSS, and JavaScript</ServiceContentHighlighter>
              expertise to craft seamless user experiences. From initial concept
              to final implementation, we transform ideas into captivating
              online platforms. Let us bring your vision to life with our design
              prowess.
            </ServiceContent>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
            <ServiceSubTitle>Logo Design</ServiceSubTitle>
            <ServiceContent>
              Elevate your brand identity with our logo design service. Our
              skilled designers blend creativity and strategy to craft logos
              that resonate with your audience. We prioritize uniqueness,
              ensuring your logo stands out in a crowded market. From concept to
              final design, we'll work closely with you to capture your brand's
              essence. Trust us to deliver a compelling visual symbol for your
              business.
            </ServiceContent>
          </div>
        </div>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
