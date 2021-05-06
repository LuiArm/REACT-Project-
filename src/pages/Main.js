import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

const Main = (props) => {
    return(
        <Container fluid="md" style={{padding: "0" }}>
             {/* <h1>Main page</h1>  
             <Button>Cheese</Button> */}
             <Carousel fade className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/v1620259248/pablo-merchan-montes-SCbq6uKCyMY-unsplash_q574js.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"

                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/c_scale,h_4281,w_3412/v1620259472/tijana-drndarski-9xgHnuy45Ks-unsplash_hzqhjb.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/c_scale,h_4263,w_3424/v1620270926/carlos-aranda-S8Z51EjK5yY-unsplash_tdo6p3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </Container>
    )   
}

export default Main