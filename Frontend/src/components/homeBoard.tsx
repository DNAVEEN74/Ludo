import "../styles/homeBoard.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function HomeBoard( backgroundColor: string ) {
    return (
        <div className="home-container" style={{ backgroundColor: backgroundColor }}>
            <div className="home-box-container">
                <div className="token-container" >
                    {Array.from({ length: 4 }, (_, index) => (
                        <div className="token" ><FaMapMarkerAlt className="token-pin" id={`${index}`} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
