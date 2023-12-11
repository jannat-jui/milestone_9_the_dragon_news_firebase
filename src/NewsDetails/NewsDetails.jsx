import LeftNewsDetails from "./LeftNewsDetails";
import RightNewsDetails from "./RightNewsDetails";

const NewsDetails = () => {
    return (
        <div className="flex px-[140px]">
            <div className="col-span-3 ">
                    <LeftNewsDetails></LeftNewsDetails>
            </div>

            <div>
                    <RightNewsDetails></RightNewsDetails>
            </div>
        </div>
    );
};

export default NewsDetails;