import { useParams } from 'react-router-dom';
import img from '../assets/offers_icon.jpg'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ChackOut from './ChackOut/ChackOut';

const stripePromise = loadStripe('pk_test_51NFEcBHhSxbFq9EibI7wK8uzfx572W4CsZSiMhNFJciRDNPbrvMEkjsmphoQgJDMPQ4DN5B4yCeMkNw0eVOG7SXx00l2NRGLbl');
const Payment = () => {
    const price = useParams()
    
   

    
    return (
        <div className=" flex justify-center items-center flex-col ">
             <div className="bg-[#f7f7f7] w-full xl:p-0 p-5">
            <div className="flex xl:flex-row flex-col-reverse justify-between mx-auto items-center w-full xl:w-[80%] ">
                <div>
                    <div className="tet text-xl xl:text-3xl font-semibold xl:font-bold border-b-4 border-blue-500">
                    Make Yoyr Payment
                    </div>
                </div>
                <img src={img} alt="" />
            </div>
            </div>
            
            <Elements stripe={stripePromise}>
            <ChackOut />
            </Elements>
        </div>
    );
};

export default Payment;