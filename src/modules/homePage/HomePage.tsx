import HomePageCarousel from "../../components/homepageCarousel/HomePageCarousel.tsx";
import DescriptionItem from "../../models/DescriptionItem.tsx";
import image1 from "/src/assets/images/IMG_20250228_094259157.jpg";
import image2 from "/src/assets/images/IMG_20241225_081637293.jpg";
import image3 from "/src/assets/images/IMG_20241228_180442299.jpg";
import image4 from "/src/assets/images/IMG_20241225_080124347.jpg";
import '../homePage/homepage.css';
export default function HomePage(){
    const carouselItems: DescriptionItem[] = [
        { imageUrl: image1, label: "Central Railway" ,description:""},
        { imageUrl: image2, label: "Brihanmumbai Electric Supply And Tranport" ,description:""},
        { imageUrl: image3, label: "Mira Bhayandar Municipal Transport" ,description:""},
        { imageUrl: image4, label: "Thane Municipal Transport" ,description:""}
    ];
    return (
        <div className='main-layout' >
            <div style={{width:'500px',height:'650px'}}>
                <HomePageCarousel items={carouselItems}/>
            </div>

        </div>
    );
}
