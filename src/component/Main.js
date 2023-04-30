import React from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";

const Main = () => {

    const carouselItemLiset = [
        {
            "id" : "1",
            "title" : "Choice Plant!",
            "overview" : "Hello! This is Foliage",
            "img" : require ("../img/one.jpg")
        },
        {
            "id" : "2",
            "title" : "How about that?",
            "overview" : "Sold by season.",
            "img" : require ("../img/two.jpg")
        },
        {
            "id" : "3",
            "title" : "Think of the environment!",
            "overview" : "We don't just sell, we select with the environment in mind.",
            "img" : require ("../img/three.jpg")
        }
    ];

    const productItemList = [
        {
            "id" : "1",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "2",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "3",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "4",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "5",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "1",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "6",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "7",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        },
        {
            "id" : "8",
            "img" : "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
            "title" : "this is macbook",
            "explanation" : "새로운 MacBook Pro는 1080p 카메라, 노트북 중 최고의 오디오 시스템, MacBook Pro 사상 가장 뛰어난 연결성을 선보인다"
        }
    ];

    return (

        <>

            {/*  benner  */}

                            <Carousel>
                                {carouselItemLiset && carouselItemLiset.map(item => (
                                    <Carousel.Item>
                                        <img
                                            className={item.id}
                                            src={item.img}
                                            alt={item.id}
                                        />
                                        <Carousel.Caption>
                                            <h3>{item.title}</h3>
                                            <p>{item.overview}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>

            {/*  item list  */}

            <Container>
                <Row>
                    {productItemList && productItemList.map(product => (
                        <Col className={"mt-5"}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"
                                          src={product.img}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {product.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.explanation}
                                    </Card.Text>
                                    <Button variant="primary">Go Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    );
};

export default Main;