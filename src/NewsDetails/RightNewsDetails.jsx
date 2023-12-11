import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import pic1 from "../../public/assets/R1.jpg"
import pic2 from "../../public/assets/R2.jpg"
import pic3 from "../../public/assets/R3.jpg"
import pic4 from "../../public/assets/RLast.jpg"

const RightNewsDetails = () => {
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


        </div>
    );
};

export default RightNewsDetails;