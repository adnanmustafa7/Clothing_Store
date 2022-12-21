import "./about.css";
import AboutImage1 from "../assets/about-01.jpg.webp";
import AboutImage2 from "../assets/about-02.jpg.webp";
import { Container, Row, Col } from "react-bootstrap";
import PageInfo from "./PageInfo";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Header/>
      <PageInfo title="About"/>
      <Container>
        <Row className="p-t-40 d-flex" >
          <Col md={7} lg={8} sm={12}>
            <Container>
              <h3>Our Story</h3>
              <p style={{ paddingTop: "20px" }} className="text_">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>

              <p style={{ paddingTop: "20px" }} className="text_">
                Donec gravida lorem elit, quis condimentum ex semper sit amet.
                Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut
                fringilla turpis in vehicula vehicula. Pellentesque congue ac
                orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a
                arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque,
                magna vel dictum rutrum, neque justo eleifend elit, vel
                tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                ligula.
              </p>
              <p style={{ paddingTop: "20px" }} className="text_">
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </Container>
          </Col>
          <Col md={5} lg={4} sm={12}>
            <Container className="image-overflow">
              <img className="img-size" src={AboutImage1} alt="IMG" />
            </Container>
          </Col>
        </Row>
        <Row className="p-t-40 justify-content-evenly">
        <Col md={{span: 5, order:1}} lg={{span: 4, order:1}} sm={{span: 12, order:2}} xs={{span: 12, order:2}}>
            <Container className="image-overflow">
              
              <img className="img-size" src={AboutImage2} alt="IMG" />
            </Container>
          </Col>
          <Col md={{span: 7, order:2}} lg={{span: 8, order:2}} sm={{span: 12, order:1}} xs={{span: 12, order:1}}>
            <Container>
              <h3>Our Story</h3>
              <p style={{ paddingTop: "20px" }} className="text_">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consequat consequat enim, non auctor massa ultrices non. Morbi
                sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales
                metus scelerisque congue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Maecenas
                gravida justo eu arcu egestas convallis. Nullam eu erat
                bibendum, tempus ipsum eget, dictum enim. Donec non neque ut
                enim dapibus tincidunt vitae nec augue. Suspendisse potenti.
                Proin ut est diam. Donec condimentum euismod tortor, eget
                facilisis diam faucibus et. Morbi a tempor elit.
              </p>

            </Container>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default About;
