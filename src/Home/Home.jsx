import { Outlet } from "react-router-dom";
import LeftSide from "../Home_Components/LeftSide";
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
                    <Outlet></Outlet>
                </div>

                <div>
                    <RightSide></RightSide>
                </div>

                
            </div>

        </div>
    );
};

export default Home;