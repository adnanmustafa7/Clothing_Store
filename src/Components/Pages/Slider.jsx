import { Carousel, Container } from "react-bootstrap"

const Slider = ()=>{
    return (
        <>
        <Container fluid>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg"
          height="600px"
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
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          height="600px"
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
          src="https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_960_720.jpg"
          height="600px"
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