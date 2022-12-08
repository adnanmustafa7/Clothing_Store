import { Carousel, Container } from "react-bootstrap"

const Slider = ()=>{
    return (
        <>
        <Container fluid>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/83/500/871/waterfall-high-resolution-desktop-wallpaper-preview.jpg"
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
          src="https://wallpaperaccess.com/full/12311.jpg"
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
          src="https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg"
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