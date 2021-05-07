import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'


const Main = (props) => {
    return(
        <body id="mainBody">
        <Container id="container" fluid="md" style={{padding: "0" }}>
        <h1 id="mainh1">Hello and Welcome to Mexico's top ten restauraunts!<br>
        </br> Stick around and see what food critics have to say!</h1>
        <p id="mainP">Below you will find the top 3 staple ingredients found in most of Mexico's cuisine that were present before the Spanish arrived.</p>
         <div id="main">
            
               <Carousel fade className="carousel">
                 <Carousel.Item>
                     <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/v1620259248/pablo-merchan-montes-SCbq6uKCyMY-unsplash_q574js.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Frijol/Beans</h2>
                    <h4>--There are 200 varietes of beans--</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"

                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/c_scale,h_4281,w_3412/v1620259472/tijana-drndarski-9xgHnuy45Ks-unsplash_hzqhjb.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2>Chillies/hot peppers</h2>
                    <h4>--There are 150 varieties of chillies--</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dr6sahlrw/image/upload/c_scale,h_4263,w_3424/v1620270926/carlos-aranda-S8Z51EjK5yY-unsplash_tdo6p3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2>Maize/Corn</h2>
                    <h4>--There are 59 varieties of corn--</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel> 
              </div>  
              
        </Container>
    </body>
    )
       
}

export default Main