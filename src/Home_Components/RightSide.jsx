import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import pic1 from "../../public/assets/R1.jpg"
import pic2 from "../../public/assets/R2.jpg"
import pic3 from "../../public/assets/R3.jpg"
import pic4 from "../../public/assets/RLast.jpg"


const RightSide = () => {
    return (
        <div>
            {/* .......................LOGIN PART...................... */}
            <div>
                <h2 className="text-3xl p-4 font-bold mb-4">Login With</h2>
                <button  className="btn  btn-outline hover:bg-blue-500 border-black text-black font-semibold text-xl w-[90%] mx-[5%]">
                    <FaGoogle></FaGoogle>Google</button>
                <button  className="btn hover:bg-blue-500 mt-4 btn-outline border-black font-semibold text-xl w-[90%] mx-[5%]">
                    <FaGithub></FaGithub>Github</button>
            </div>

            {/* .......................FIND US PART...................... */}
            <div className="mt-3">
                <h2 className="text-3xl p-4 font-bold mb-4">Find Us On</h2>
                <button  className="btn  btn-outline hover:bg-blue-500 border-black text-black font-semibold text-xl w-[90%] mx-[5%]">
                   <FaFacebookSquare></FaFacebookSquare>Facebook</button>
                <button  className="btn hover:bg-blue-500 mt-4 btn-outline border-black font-semibold text-xl w-[90%] mx-[5%]">
                    <FaTwitter></FaTwitter>Twitter</button>
                <button  className="btn hover:bg-blue-500 mt-4 btn-outline border-black font-semibold text-xl w-[90%] mx-[5%]">
                    <FaInstagram></FaInstagram>Instagram</button>
            </div>

            {/* ...................................... Q ZONE ................................ */}
            <div className="bg-slate-300 px-[27px] space-y-8 mt-6">
                <h1 className="pt-4">Q Zone</h1>
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>

            {/* Last part */}

            <div className="AddvertiseBanner h-[509px] w-[304px] mt-6">

                <h1 className="text-white text-[30px] text-center items-center pt-[65px] py-[40px] font-bold leading-[30px] h-[135px] w-[190px] mx-auto">Create an Amazing Newspaper</h1>
                <p className="text-white text-[14px] text-center items-center pt-[65px] py-[40px] font-normal leading-[26px]  w-[190px] mx-auto">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

               <div className="text-center">
               <button className="btn bg-red-600 w-36 mx-auto border-0">Learn More</button>
               </div>
            </div>
        </div>

        
    );
};

export default RightSide;