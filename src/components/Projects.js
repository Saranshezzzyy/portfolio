import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import netflixicon from "../assets/img/netflix.jpg";
import foodicon from "../assets/img/food.jpg";
import portfolioicon from "../assets/img/portfolio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ntflix Clone",
      description: "It is a MERN stack-powered replication of the Netflix platform.",
      imgUrl: netflixicon,
    },
    {
      title: "Food Delivery Website",
      description: "A fully functional food delivery website with dynamic features.",
      imgUrl: foodicon,
    },
    {
      title: "Porfolio Website",
      description: "It is my professional portfolio website, developed using the MERN stack.",
      imgUrl: portfolioicon,
    },
    
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I've successfully crafted an array of projects using the MERN stack, demonstrating expertise in MongoDB, Express.js, Node.js, and React.js. My portfolio encompasses e-commerce platforms, social networks, data-driven dashboards, and more.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I've successfully crafted an array of projects using the MERN stack, demonstrating expertise in MongoDB, Express.js, Node.js, and React.js. My portfolio encompasses e-commerce platforms, social networks, data-driven dashboards, and more.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Please feel free to reach out to me at your convenience. I am eager and available to collaborate on any web development-related projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
