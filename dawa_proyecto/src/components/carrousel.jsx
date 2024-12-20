import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../assets/img/carrousel/imagen1.jpg';
import Imagen2 from '../assets/img/carrousel/imagen2.jpg';
import Imagen3 from '../assets/img/carrousel/imagen3.jpg';

const items = [
    {
        src: Imagen1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: Imagen2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: Imagen3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

const Carrousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} width="100%" height="400px" />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={3500} 
            {...props}
            style={{ paddingTop: "10px" }} 
            >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
};

export default Carrousel;