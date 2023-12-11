import moment from "moment/moment";

import headerImage from '../assets/Header/The Dragon News.png';

const Header = () => {
    const date = moment().format('dddd , MMMM Do, YYYY');
    return (
        <div>
            <div className="text-center mt-10">
            <img className="mx-auto mb-3" src={headerImage} alt="" />
            <p className="text-black text-[18]px font-normal leading-[30px]">Journalism Without Fear or Favour</p>
            <p className="text-black text-[20]px font-medium leading-[30px]">{date}</p>

            
        </div>
        </div>
    );
};

export default Header;