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
        <Carousel.Caption>
          <h3>Mac Book</h3>
          <p>Premium Quality Mac Book very fast in speed with high processor</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImage2}
          //height="600px"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Hp Laptop</h3>
          <p>Used Laptop that is best in condition and in reasonable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SlideImage3}
          //height="600px"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mac Book Pro</h3>
          <p>
            Limited Version Mac book that can be find in best of quality.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
        
        </>

    )
}

export default Slider;