import { Carousel, Container } from "react-bootstrap"
import './Slider.css'
import SlideImage1 from '../../images/slide-01.jpg.webp'
import SlideImage2 from '../../images/slide-02.jpg.webp'
import SlideImage3 from '../../images/slide-04.jpg.webp'

const Slider = ()=>{
    return (
        <>
        <Container fluid className="p-0">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImage1}
          //height="600px"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImage2}
          //height="600px"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImage3}
          //height="600px"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
        
        </>

    )
}

export default Slider;