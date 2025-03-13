import {Carousel} from "react-bootstrap";
import * as React from "react";
import DescriptionItem from "../../models/DescriptionItem.tsx";

interface CarouselProps {
    items: DescriptionItem[]; // Array of carousel items
}
const HomePageCarousel : React.FC<CarouselProps> = ({items}) => {
    return (
        <Carousel>
            {items.map((item, index) =>(
                <Carousel.Item>
                    <img src={item.imageUrl} alt='Not Availablee' height={500} width={500}/>
                    <Carousel.Caption key={index}>
                        <br/>
                        <label style={{fontSize: '15px'}}>{item.label}</label>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

    )
}

export default HomePageCarousel;