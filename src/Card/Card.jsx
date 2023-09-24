
import { useEffect, useState } from 'react';
import { FaBicycle,  FaCarSide, FaCheck, FaPlaneDeparture } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Card = () => {
    
    const [data,setData] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/getPlan')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="grid absolute top-56 grid-cols-3 wf justify-center items-center w-[80%] left-40  gap-14">
            
            {
               data.map(item => <>
               <div className=" text-3xl font-bold bg-white w-[80%] mx-auto rounded-md drop-shadow-2xl p-5">

<div className='flex justify-center items-center flex-col'>
    <h5>{item.type}</h5>
    
    <div className={`text-8xl ${item.type == "Pro" ? "text-[#ff7473]" : item.type == "Start-Up" ? 'text-[#5a5679]' : 'text-[#47b8e0]'} `}>
        {item.type == "Pro" ? <FaCarSide /> : item.type == "Start-Up" ? <FaBicycle /> : <FaPlaneDeparture />}
    </div>
    <h5 className={`${item.type == "Pro" ? "text-[#ff7473]" : item.type == "Start-Up" ? 'text-[#5a5679]' : 'text-[#47b8e0]'}`}>{item.price == 0 ? "Free" : `${item.price}`}$</h5>
    
</div>
     <h5 className={`text-xl text-center mt-8 pt-5 ${item.type == "Pro" ? "text-[#ff7473]" : item.type == "Start-Up" ? 'text-[#5a5679]' : 'text-[#47b8e0]'}  border-t-2 border-gray-200`}>{item.title}</h5>

     <div className='text-sm flex justify-start items-start flex-col gap-4 mt-5'>
      {
        item.feature.map(feauters => <>
          <span className=' flex justify-self-center items-center gap-3'> <span className='text-green-500 '> <FaCheck /></span> {feauters} </span>
        </>)
      }
        
     </div>
     <Link to={`/deteils/${item._id}`}><button className={`${item.type == "Pro" ? "bg-[#ff7473]" : item.type == "Start-Up" ? 'bg-[#5a5679]' : 'bg-[#47b8e0]'} px-8 py-3 text-xl w-full text-white mt-3 rounded-sm`}>Subscribe</button></Link>
</div>
               </>)
            }
        </div>
    );
};

export default Card;