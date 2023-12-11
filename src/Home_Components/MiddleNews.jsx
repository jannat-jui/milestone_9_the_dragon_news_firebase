import { useEffect, useState } from "react";

const MiddleNews = () => {

    const [loadmiddleData , setloadmiddleData] = useState([])

    useEffect( ()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setloadmiddleData(data))
    },[])


    return (
        <div>

            {loadmiddleData?.map(item=>
                <div key={item._id} className="p-6">

                <div className="flex justify-between items-center bg-[#F3F3F3] p-[28px] ">
                    <div className="flex items-center gap-4">
                        <div>
                            <div className="avatar">
                                <div className="w-[40px] h-[40px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={item.author.img} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-black text-[16]px font-bold ">{item.author.name}</h1>
                            <p className="text-black text-[12]px font-medium ">{item.author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://i.ibb.co/xGZhBzR/Frame-1.jpg" alt="" />
                        <img src="https://i.ibb.co/3fhjgJF/Frame.jpg" alt="" />
                    </div>
                </div>


                <div className="p-[28px]">
                    <h1 className="text-black text-[20]px font-extrabold leading-[35px]">{item.title}</h1>
                    <img src={item.image_url} alt="" />
                    <p className="text-black text-[16]px font-medium leading-[26px] mt-3"> {item.details.length>200 ? item.details.slice(0,200) + "..." : item.details}</p>
                    <button className="btn my-4">Read More</button>
                    <hr />
                    <div>
                        <div className="flex items-center justify-between my-4">
                                 <div className="flex gap-3">
                                         <img src="https://i.ibb.co/hLkp3Yk/Frame-2.jpg" alt="" />
                                         <img src="https://i.ibb.co/hLkp3Yk/Frame-2.jpg" alt="" />
                                         <img src="https://i.ibb.co/hLkp3Yk/Frame-2.jpg" alt="" />
                                         <img src="https://i.ibb.co/hLkp3Yk/Frame-2.jpg" alt="" />
                                         <img src="https://i.ibb.co/hLkp3Yk/Frame-2.jpg" alt="" />
                                         <p>4.9</p>
                                 </div>
                                 <div className="flex gap-2
                                 ">
                                       <img src="https://i.ibb.co/brkg61h/Frame.jpg" alt="" /> 
                                       <p>499</p>
                                 </div>
                        </div>
                    </div>

                </div>
            </div>
                )}

        </div>
    );
};

export default MiddleNews;