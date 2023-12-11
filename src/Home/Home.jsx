import LeftSide from "../Home_Components/LeftSide";
import MiddleNews from "../Home_Components/MiddleNews";
import NavBar from "../Home_Components/NavBar";
import RightSide from "../Home_Components/RightSide";
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>

            <div className="flex gap-1 justify-between items-center mt-2 w-[80%] h-[60px] mx-auto bg-slate-300">
                <div>
                    <button className="btn bg-red-700 rounded-none w-[90px] h-[48px] ml-2">Latest</button>
                </div>
                <div className="p-2">
                        <Marquee className="text-black text-[18]px font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
                </div>
            </div>

            <NavBar></NavBar>

            <div className="grid grid-cols-4 w-[80%] mx-auto ">

                <div>
                    <LeftSide></LeftSide>
                </div>

                <div className="col-span-2">
                    <MiddleNews></MiddleNews>
                </div>

                <div>
                    <RightSide></RightSide>
                </div>

                
            </div>

        </div>
    );
};

export default Home;