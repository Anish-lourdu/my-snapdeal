import React, { useState } from "react";
import { Carousel, Button, CarouselItem } from "react-bootstrap";

const BannerImage=()=>{

    const slides=[
        {id: 1, image: 'https://n3.sdlcdn.com/imgs/k/r/l/ONDC_WEB_BANNER_12oct-f3080.jpg', name: 'ONDC'},
        {id: 2, image: 'https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg', name: 'BOB'},
        {id: 3, image: 'https://n3.sdlcdn.com/imgs/k/r/8/desktopsalwar2610-6a41f.jpg', name: 'Salwar Suit'},
        {id: 4, image: 'https://n1.sdlcdn.com/imgs/k/r/8/desktopDining2610-79beb.jpg', name: 'Dining & Serving'},
        {id: 5, image: 'https://n1.sdlcdn.com/imgs/k/r/8/desktopcasual_shoe2610-fe297.jpg', name: 'Casual Shoes'},
    ];

    const [index, setIndex]=useState(0);

    const handleSelect=(selectedIndex,e)=>{
        setIndex(selectedIndex);
    };

    const handleNameClick=(selectedIndex)=>{
        setIndex(selectedIndex);
    };

    return(
        <div className="container">
             <div className="row">
            <Carousel className="img-fluid bannerImage-carousel" activeIndex={index} onSelect={handleSelect}>
                {slides.map((slide,i)=>(
                    <CarouselItem key={slide.id}>
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                        />
                    </CarouselItem>
                ))}
            </Carousel>
            </div>
            <div className="row">
            <div className="text-center mt-3">
                    {slides.map((slide,i)=>(
                        <Button
                            key={slide.id}
                            variant="primary"
                            className="mx-2"
                            onClick={()=>handleNameClick(i)}
                        >
                            {slide.name}
                        </Button>
                    ))}
            </div>
            </div>
        </div>
    )
}
export default BannerImage;