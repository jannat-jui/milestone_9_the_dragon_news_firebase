import LeftSide from "../Home_Components/LeftSide";
import MiddleNews from "../Home_Components/MiddleNews";
import NavBar from "../Home_Components/NavBar";
import RightSide from "../Home_Components/RightSide";

const Home = () => {
    return (
        <div>
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