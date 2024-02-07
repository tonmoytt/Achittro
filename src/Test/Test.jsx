import { useState } from "react";


import img1 from "./../assets/Images/download (1).jpg"
import img2 from "./../assets/Images/download.jpg"
import img3 from "./../assets/Images/images (1).jpg"
import img4 from "./../assets/Images/images.jpg"
const Test = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <li className="flex gap-8 items-center ">
                < div className=" bg-black h-8 w-10  "
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
ig
                </ div>
                {isHovered && <div className=" bg-gray-700">
                    <div className="flex">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    </div> 
                </div>}
            </li>



        </div>
    );
};

export default Test;