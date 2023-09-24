
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const ChackOut = () => {

    const stripe = useStripe()
    const element = useElements()



    const handleSubmit = async(event) =>{
        event.preventDefault()

        if (!stripe || !element) {
            return
        }

        const card = element.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log(card);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
        
    }
    return (
        <div className='w-[80%] mx-auto'>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default ChackOut;