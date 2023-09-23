// Projects.js
import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background:#f5f5f5;
  padding: 5rem 0;
`;

const ProjectsContainer = styled.section`
  text-align: center;
`;

const ProjectsTitle = styled.h1`
  margin: 0 0 4rem 0;
  text-decoration: underline;
`;

const ProjectsCard = styled.div`
  background: none;
`;

const ProjectsSubTitle = styled.h2`
  margin: 0 0 3rem 0;
`;

const ProjectsContent = styled.p`
  text-align: justify;
`;

const ProjectsContentHighlighter = styled.span`
  color: red;
  font-weight: bold;
`;

const Projects = () => {
  const projects = [
    {
      title: "Care Care Service Center",
      description:
        "The Car Care Service System represents a significant step forward in the automotive service industry, providing an integrated solution for car owners and service centers alike. It streamlines the entire process, from appointment scheduling to payment, ultimately enhancing the car ownership experience. With its user-friendly interface and robust features, it caters to the needs of modern car owners and helps service centers deliver top-notch services. This project demonstrates the power of HTML, CSS, JavaScript, PHP, and MySQL in creating efficient and user-centric web applications.",
      link: "#",
    },
    {
      title: "Event Management System",
      description:
        "The Event Management System stands as a testament to the power of web development technologies in simplifying complex tasks. By leveraging HTML, CSS, JavaScript, PHP, and MySQL, this project offers a comprehensive and user-friendly solution for event organizers and attendees alike. It transforms event planning and execution into a seamless and efficient process, enhancing the experience for all stakeholders involved in the world of events. Whether it's a wedding, conference, or concert, the Event Management System ensures that every event runs smoothly, leaving lasting impressions and memories.",
      link: "#",
    },
    {
      title: "Enterprise Resource Planning System",
      description:
        "The ERP System for Web Development Company represents a significant advancement in resource management and project efficiency. By leveraging HTML, CSS, JavaScript, PHP, and MySQL, this project offers a comprehensive solution that allows web development companies to optimize their operations, improve client relationships, and maximize profitability. It streamlines resource allocation, project workflows, and financial management, ensuring that web development firms can focus on what they do best—creating exceptional web solutions for their clients. This ERP system is a testament to the power of technology in driving productivity and success in the digital era.",
      link: "#",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer className="container">
        <ProjectsTitle>My Projects</ProjectsTitle>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 col-md-12 col-sm-12 mb-5">
              <ProjectsCard className="card">
                <div className="card-body">
                  <ProjectsSubTitle className="card-title">
                    {project.title}
                  </ProjectsSubTitle>
                  <ProjectsContent className="card-text">
                    {project.description}
                  </ProjectsContent>
                  <a
                    href={project.link}
                    className="btn btn-danger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </ProjectsCard>
            </div>
          ))}
        </div>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
