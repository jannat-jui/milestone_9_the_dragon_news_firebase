import { useEffect, useState } from "react";

const LeftSide = () => {
    const [leftdata, setleftData] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setleftData(data))

    }, [])

    return (
        <div className="w-[267px] pt-4">
            <h1 className="text-black text-[18]px font-bold leading-[30px]">All Category</h1>
            {leftdata.map(item =>
                <div key={item.id} className="ml-7" >

                    {item.name}

                </div>)}

            <div>
                <div className="card card-compact w-[267px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[267px] h-[150px]" src="https://i.ibb.co/Ry85PGw/Rectangle-3986.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                            <p>Sports</p>
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                        
                   
                </div>
                <div className="card card-compact w-[267px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[267px] h-[150px]" src="https://i.ibb.co/LCNKxY2/Rectangle-3986-1.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                            <p>Sports</p>
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                        
                   
                </div>
                <div className="card card-compact w-[267px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[267px] h-[150px]" src="https://i.ibb.co/Yk3DRzJ/Rectangle-3986-2.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                            <p>Sports</p>
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                        
                   
                </div>
            </div>

        </div>
    );
};

export default LeftSide;