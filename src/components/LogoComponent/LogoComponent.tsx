import LogoDetails from "../../models/LogoDetails.tsx";
import {useNavigate} from "react-router-dom";
import "./logoComponent.css";
interface LogoComponentProps {
    items: LogoDetails[];
}

const LogoComponent :React.FC<LogoComponentProps> = ({items}) => {
    const navigate = useNavigate();
    const onClickIcon = (t:number) => {
        const data = {message: t}
        navigate('/route-page', {state: data})
    }
    return(
        <div className="icon-row">
            {items.map((item, index) =>(
                <div key={index} className="icon" onClick={() => onClickIcon(item.companyId)}>
                    <img
                        className="logo-image"
                        src={item.imageUrl}
                        alt="Not available"
                    />
                    <label className='logo-label'>{item.label}</label>
                </div>
            ))}
        </div>

    )
}
export default LogoComponent;