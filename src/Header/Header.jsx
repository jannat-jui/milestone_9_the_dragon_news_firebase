import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import headerImage from '../assets/Header/The Dragon News.png';

const Header = () => {
    const date = moment().format('dddd , MMMM Do, YYYY');
    return (
        <div>
            <div className="text-center mt-10">
            <img className="mx-auto mb-3" src={headerImage} alt="" />
            <p className="text-black text-[18]px font-normal leading-[30px]">Journalism Without Fear or Favour</p>
            <p className="text-black text-[20]px font-medium leading-[30px]">{date}</p>

            <div className="flex gap-1 justify-between items-center mt-2 w-[80%] h-[60px] mx-auto bg-slate-300">
                <div>
                    <button className="btn bg-red-700 rounded-none w-[90px] h-[48px] ml-2">Latest</button>
                </div>
                <div className="p-2">
                        <Marquee className="text-black text-[18]px font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;