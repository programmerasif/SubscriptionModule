import { useEffect, useState } from "react";
import img from "../../assets/offers_icon.jpg"
import { useLoaderData } from "react-router-dom";
const Deteils = () => {
    const [data,setData] = useState([])
    const [year, setYear] =useState(false)
    const [month, setMonth] =useState(true)
    useEffect(() =>{
        fetch('http://localhost:5000/getPlan')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const id = useLoaderData().id
   const item = data.find(item => item._id  == id)
    const handelYear = () =>{
        setYear(true)
        setMonth(false)
       
    }
    const handelMonth = () =>{
        setMonth(true)
        setYear(false)
        
    }
    return (
        <div className=" flex justify-center items-center flex-col ">
            <div className="bg-[#f7f7f7] w-full xl:p-0 p-5">
            <div className="flex xl:flex-row flex-col-reverse justify-between mx-auto items-center w-full xl:w-[80%] ">
                <div>
                    <div className="tet text-xl xl:text-3xl font-semibold xl:font-bold border-b-4 border-blue-500">
                    {
                        item?.feature[0]
                    }
                    </div>
                </div>
                <img src={img} alt="" />
            </div>
            </div>

            <div className="w-[80%] ">
                <h5 className="text-blue-500 text-xl font-bold pb-5 mt-16 border-b-2 ">Configure your server</h5>
            </div>
            <div className="flex justify-around items-center xl:p-0 p-5 xl:flex-row flex-col gap-10">
            <div className="flex justify-start gap-5 mt-4 items-start flex-col">
                <span className="text-xl"><span className="text-blue-500 text-2xl font-bold">Basic Price : </span> {item?.price == 0? "Free" : item?.price} $</span>
                <form>
                Monthlt : <span className={`border border-black me-4 cursor-pointer  bg-white text-white rounded-full shadow-sm ${month == true ?  " bg-blue-500 text-blue-500 ring-2 ring-blue-400 border-none" : " bg-white text-white"}  `} onClick={handelMonth}>.....</span>
                Yearly : <span className={`border border-black  cursor-pointer rounded-full ${year == true ?  " bg-blue-500 text-blue-500 ring-2 ring-blue-400 border-none" : " bg-white text-white"} `} onClick={handelYear}>.....</span>
                </form>
                <span className="text-xl "><span className="text-blue-500 text-2xl font-bold">CPU : </span>{item?.feature[0]} </span>
            </div>
            <div className=" flex justify-center items-center gap-10 p-10 drop-shadow-lg mt-4 rounded-md text-black bg-white">
                <h5 className="font-bold"><span className="text-blue-500">{item?.price == 0 ? `${year ? 10 : "Free"}` : `${year ? item?.price + 20 : item?.price}`}$</span>  {year ? "/Yearly" : "/monthly"}</h5>
                <div className="bg-blue-500 text-white px-7 py-3 rounded-md">Order Now</div>
            </div>
            </div>
            <div className="w-full xl:w-[45%] font-bold mt-5 xl:p-0 p-5">
            <span className="text-blue-500">Feauter : </span>
            {
                        item?.feature.map((item ,index) => <span key={index}>   {item}, </span>)
                    }
            </div>
        </div>
    );
};

export default Deteils;