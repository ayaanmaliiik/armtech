import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 5rem 0;
`;
const AboutContainer = styled.div`
  text-align: center;
`;

const AboutTitle = styled.h1`
  margin: 0 0 4rem 0;
  text-decoration: underline;
`;

const AboutSubTitle = styled.h2`
  margin: 0 0 3rem 0;
  padding: 2rem 0 0 0;
`;

const AboutContent = styled.p`
  text-align: justify;
`;

const AboutContentHighlighter = styled.span`
  color: red;
  font-weight: bold;
`;

const AboutUnorderlist = styled.ul`
  list-style: none;
  padding: 1rem 0;
`;

const Aboutlist = styled.li`
  padding: 1rem 0;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer className="container">
        <AboutTitle>About Me</AboutTitle>
        <AboutContent>
          At Arm<AboutContentHighlighter>Tech</AboutContentHighlighter>, we are committed to helping you achieve your
          digital aspirations through our top-tier services in web development,
          web design, and logo design. In today's fast-paced digital world,
          having a strong online presence is essential, and we are here to
          empower you with the tools and expertise needed to succeed.
        </AboutContent>
        <AboutSubTitle>
          <AboutContentHighlighter>Web Development</AboutContentHighlighter>
          :Building Your Digital Foundation
        </AboutSubTitle>
        <AboutContent>
          <AboutUnorderlist>
            Web development is the cornerstone of your online presence. It
            involves creating websites and web applications that not only look
            great but also function seamlessly. Our team of skilled developers
            is well-versed in the latest technologies and best practices to
            ensure your digital platform is robust, user-friendly, and capable
            of meeting your specific needs.
            <Aboutlist>
              <AboutContentHighlighter>
                Cutting-Edge Technologies:
              </AboutContentHighlighter>{" "}
              We stay on the cutting edge of web development technologies,
              including{" "}
              <AboutContentHighlighter>
                HTML5, CSS3, and JavaScript
              </AboutContentHighlighter>
              . This enables us to build modern, responsive websites that adapt
              beautifully to various devices and screen sizes.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
                User-Centric Approach :
              </AboutContentHighlighter> User experience (UX) is at the heart of our development process.
              We understand that a website should not only be visually appealing
              but also easy to navigate and intuitive for your visitors.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
                Custom Solutions :
              </AboutContentHighlighter> We tailor our solutions to your unique requirements. Whether you
              need an e-commerce platform, a content management system, or a
              custom web application, we have the expertise to bring your vision
              to life.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
                Performance Optimization :
              </AboutContentHighlighter> We optimize your website for speed and performance, ensuring that
              it loads quickly and delivers an exceptional user experience. This
              is crucial for both user satisfaction and search engine rankings.
            </Aboutlist>
          </AboutUnorderlist>
        </AboutContent>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <AboutSubTitle>
          <AboutContentHighlighter>Web Design</AboutContentHighlighter>: Making
          a Lasting Impression
        </AboutSubTitle>
        <AboutContent>
          <AboutUnorderlist>
            In the digital realm, first impressions matter, and your website's
            design is often the first thing your visitors see. Our web design
            services are geared towards creating visually stunning, engaging,
            and user-friendly websites that leave a lasting impact.
            <Aboutlist>
              <AboutContentHighlighter>
                Creative Excellence :
              </AboutContentHighlighter> Our team of talented designers combines creativity with
              functionality. We don't just create beautiful designs; we ensure
              they align with your brand and business goals.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
              Responsive Design :
              </AboutContentHighlighter> With the growing diversity of devices and screen sizes, responsive design is imperative. Our websites are designed to look and perform flawlessly on desktops, tablets, and smartphones.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
              Collaborative Process :
              </AboutContentHighlighter> We believe in close collaboration with our clients. Your input is invaluable, and we work together at every stage to ensure the design aligns perfectly with your vision.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
              Brand Consistency :
              </AboutContentHighlighter> Your website is an extension of your brand identity. We take great care to maintain brand consistency throughout the design, ensuring that your online presence mirrors your offline reputation.
            </Aboutlist>
          </AboutUnorderlist>
        </AboutContent>
        {/* ///////////////////////////////////////////////////////////////////////////////////////// */}
        <AboutSubTitle>
          <AboutContentHighlighter>Logo Design</AboutContentHighlighter>
          : A Symbol of Your Brand's Identity
        </AboutSubTitle>
        <AboutContent>
          <AboutUnorderlist>
          Your logo is a visual representation of your brand, and it plays a crucial role in creating brand recognition and trust. Our logo design services are aimed at crafting unique, memorable logos that set you apart from the competition.
            <Aboutlist>
              <AboutContentHighlighter>
              Strategic Creativity :
              </AboutContentHighlighter> We blend creativity with strategic thinking. Our designers immerse themselves in your brand's story and values to create a logo that resonates with your target audience.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
              Uniqueness Guaranteed :
              </AboutContentHighlighter> We understand the importance of standing out in a crowded market. Your logo will be one-of-a-kind, designed from scratch to capture the essence of your brand.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
                Custom Solutions :
              </AboutContentHighlighter>
              We tailor our solutions to your unique requirements. Whether you
              need an e-commerce platform, a content management system, or a
              custom web application, we have the expertise to bring your vision
              to life.
            </Aboutlist>
            <Aboutlist>
              <AboutContentHighlighter>
              End-to-End Service :
              </AboutContentHighlighter> From the initial concept to the final design, we handle every step of the logo creation process. You can trust us to deliver a compelling visual symbol for your business.
            </Aboutlist>
          </AboutUnorderlist>
        </AboutContent>
        <div className="mt-5">
        <AboutContent>In a world where digital presence is non-negotiable, Arm<AboutContentHighlighter>Tech </AboutContentHighlighter> is your trusted partner in achieving digital excellence. Whether you're launching a new venture, rebranding, or simply looking to enhance your online presence, we have the expertise and passion to help you succeed.</AboutContent>
        <AboutContent>Our commitment to quality, creativity, and client satisfaction sets us apart. We are driven by your success and dedicated to delivering results that exceed your expectations. Let us work together to elevate your brand's digital presence to new heights.</AboutContent>
        <AboutContent>Contact us today to discuss your project and discover how  Arm<AboutContentHighlighter>Tech </AboutContentHighlighter> can help you achieve your digital goals. We look forward to collaborating with you and bringing your vision to life.</AboutContent>
      </div>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
