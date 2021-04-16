// const Index = () => {
//   return (
//     <h1>I am Index page</h1>
//   )
// }

import BaseLayout from "components/layouts/BaseLayout"
import { Col, Container, Row } from "reactstrap"
import Typed from 'react-typed';
import { useGetUser } from "actions/user";
import { useEffect, useRef, useState } from "react";
import BasePage from "components/BasePage";

const ROLES = ['Developer', 'JavaScript', 'Next.js', 'React.js', 'Node.js', 'MySQL', 'MariaDB', 'AWS', 'GCP', 'Delphi Pascal']

const Index = () => {

  const { data: dataU, loading: loadingU } = useGetUser();
  const [isFlipping, setIsFlipping] = useState(false);
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation()
    return () => flipInterval.current && clearInterval(flipInterval.current)
  })

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevFlipping => !prevFlipping)
    }, 4000)
  }

  return (
    <BaseLayout
      user={dataU}
      loading={loadingU}
      navClass="transparent"
      className={`cover ${isFlipping ? `cover-orange` : `cover-blue`}`}>
      <BasePage indexPage>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    
                  <div className="front">
                      <div className="image image-1">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    
                    <div className="back">
                      <div className="image image-2">
                        <div className="hero-section-content">
                          <h2>React and Next is Amazing!</h2>
                          <div className="hero-section-content-intro">
                            Software developer ready for a project of any type!
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>

                    {/* <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.jpg" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>

                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-2.jpg" />
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div> */}

                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Danny Andrade.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>

                <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                >
                </Typed>

                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                </h1>
                </div>

              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  )
}

export default Index