import Image from "next/image";
import BackIcon from "@/assets/imges/back.png";

const Backbtn = () => {
    return (
        <div className="back">
            <button className="back-btn">
                <Image className="back-btn-img" src={BackIcon} alt="back" title="back" />
                <span className="back-btn-txt">Back</span>
            </button>
        </div>
    )
}

export default Backbtn;