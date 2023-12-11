import edit3 from "../../public/assets/editorsInsight3.png"

const LeftNewsDetails = () => {
    return (
        <div>
            <h1 className="text-black text-[20]px font-bold leading-[30px]">Dragon News</h1>
            <div className="w-[849px] h-[1007px] p-[30px] border-black-1">
                <img className="w-[789px] h-[411px]" src={edit3} alt="" />
                <h1 className="text-black text-[25]px font-bold leading-[45px] mt-2">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                
                <p className="text-black text-[16]px font-normal leading-[26px] mt-2">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>

                <button className="btn bg-red-600 mt-6">All news in this category</button>
            </div>

           <dir>
                <h1 className="text-black text-[25px] font-semibold leading-[26px]">Editors Insight</h1>
                <div className="flex gap-2">
                <div className="card card-compact w-[260px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[260px] h-[150px]" src="https://i.ibb.co/Ry85PGw/Rectangle-3986.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                          
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                </div>
                
                <div className="card card-compact w-[260px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[260px] h-[150px]" src="https://i.ibb.co/Ry85PGw/Rectangle-3986.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                          
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                </div>

                <div className="card card-compact w-[260px] bg-base-100 rounded-none mt-5">
                    <figure><img className=" w-[260px] h-[150px]" src="https://i.ibb.co/Ry85PGw/Rectangle-3986.png" alt="" /></figure>
                    
                       
                        <p className="text-black text-[20]px font-bold leading-[30px]">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>

                        <div className="flex gap-2 mt-4">
                          
                            <img src="https://i.ibb.co/GCpDT1j/Frame.jpg" alt="" />
                            <p>Jan 4, 2022</p>
                        </div>
                </div>
                   
                </div>
           </dir>
        </div>
    );
};

export default LeftNewsDetails;