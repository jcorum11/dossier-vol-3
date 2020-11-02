import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
          <section
            id={`${this.props.id}`}
            className="about"
            style={{ height: this.context.height }}
          >
            {this.particles()}
            <Row>
              <Col md={6} className="content">
                <div className="content-text">
                  <div className="line-text">
                    <h4>About Me</h4>
                  </div>
                  <h3>I'm a Full Stack Web Developer</h3>
                  <div className="separator" />
                  <p>
                    I have worked to overcome obstacles to become a full stack
                    developer, such as doubts from professors, challenges from
                    having a first child, and family related issues to graduate
                    from University of Utah’s boot camp near the top of the
                    class, earning me a full-stack developer certificate.
                    Because of these obstacles I can easily empathize with
                    users' needs to foresee issues and useful features to
                    deliver a polished, practical, optimized product. This
                    drives me to seek new ideas for and from any team that I may
                    be a part of.
                  </p>
                  <div className="social social_icons">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="social_icon"
                      onClick={() => window.open("https://www.github.com")}
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social_icon"
                      onClick={() => window.open("https://www.twitter.com")}
                    />
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social_icon"
                      onClick={() => window.open("https://www.youtube.com")}
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="social_icon"
                      onClick={() => window.open("https://www.linkedin.com")}
                    />
                  </div>
                </div>
              </Col>
              <Col md={6} className="skills">
                <div className="line-text">
                  <h4>My Skills</h4>
                </div>
                <div className="skills-container">
                  <Progress name="React" value={80} delay={1100} />
                  <Progress name="Redux" value={70} delay={1100} />
                  <Progress name="MongoDB" value={100} delay={1100} />
                  <Progress name="GraphQL" value={90} delay={1100} />
                  <Progress name="PWA" value={50} delay={1100} />
                  <Progress name="Bootstrap" value={80} delay={1100} />
                </div>
              </Col>
            </Row>
          </section>
        );
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero