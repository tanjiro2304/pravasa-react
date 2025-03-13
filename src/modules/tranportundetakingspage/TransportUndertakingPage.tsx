
import '/src/modules/tranportundetakingspage/TransportUndertakingPage.css';
import LogoDetails from "../../models/LogoDetails.tsx";
import LogoComponent from "../../components/LogoComponent/LogoComponent.tsx";
export default function TransportUndertakingPage(){


    const logoItemsTop: LogoDetails[] = [
        {companyId :1, imageUrl: "/src/assets/logos/images.png", label: "Brihanmumbai Electric Supply And Transport" ,description:""},
        {companyId :2, imageUrl: "/src/assets/logos/TMCU.webp", label: "Thane Municipal Transport" ,description:""},
        {companyId :3, imageUrl: "/src/assets/logos/FXBKkfCF_400x400.jpg", label: "Navi Mumbai Municipal Transport" ,description:""},
        {companyId :4, imageUrl: "/src/assets/logos/unnamed.png", label: "Mira-Bhayandar Municipal Transport" ,description:""}
    ];

    const logoItemsBottom: LogoDetails[] = [
        {companyId :1, imageUrl: "/src/assets/logos/msrtc-st-mahamandal-logo-A444C34891-seeklogo.com.png", label: "MSRTC" ,description:""},
        {companyId :1, imageUrl: "/src/assets/logos/vvmt.jpg", label: "Vasai Virar Municipal Transport" ,description:""},
        {companyId :1, imageUrl: "/src/assets/logos/pmpml.png", label: "Pune Mahanagar Parivahan Mahamandal Limited" ,description:""},
        {companyId :1, imageUrl: "/src/assets/logos/nmpml.png", label: "Nashik Mahanagar Parivahan Mahamandal Limited" ,description:""}
    ];

    return(
        <div className="mainLayout" style={{ width: "100%" }}>
           <LogoComponent items={logoItemsTop}/>
           <LogoComponent items={logoItemsBottom}/>
        </div>
    )
}