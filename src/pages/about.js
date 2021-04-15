import BasePage from "components/BasePage";
import BaseLayout from "components/layouts/BaseLayout";
import { useGetUser } from "actions/user";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";

const About = () => {
  const { data: dataU, loading: loadingU } = useGetUser();
  
  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true
    }
  })
  
  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein'
    }
    
    return 'fadein'
  }

  return (
    <BaseLayout user={dataU} loading={loadingU}>
      <BasePage title="About Me - Danny Andrade" className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Danny Andrade and I am an experienced software developer. </p>
              <p>
                I have a certificate in technologist of data processing and several years of experience working
                on a wide range of technologies and projects in Delphi Pascal and starting development of
                web applications in React.js and Node.js.
              </p>
              <p>
                I am founding partner of enterprise
                <a target="_blank" href="https://www.andrasistemas.com.br"> Andra Sistemas </a>
                {/* <Link target="_blank" href="https://www.andrasistemas.com.br"> Andra Sistemas </Link> */}
                what was created in year of 1995.
                Throughout my career, I have acquired advanced technical knowledge and the ability to development
                code clear and organized, integring many different sectors and elaboring of processes for our 
                client companies.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About