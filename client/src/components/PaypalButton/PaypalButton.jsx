/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';


function PaypalButton({ handleSubmit }) {
	const dispatch = useDispatch();

	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	let sum = shoppingCart.reduce(reducer, 0) / 92;
	

	const paypalOptions = {
		client: { sandbox: 'AeWB7olLbWTatL-Bh3LLbfPakiLl-DFQ1rFJeGzQ5BznqK2OyWjHSI7C4NKkGoXg-YK9NZi9nCD9DOYN' },
		intent: 'CAPTURE',
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	};

   const handlePayError = (error) =>{
      alert('We could not make the payment, Please try again')
      console.error(error)
      //dispatch
   }

   const handleCancelPay = (data) =>{
      console.log('cancel', data)
      //dispatch
   }

	return (
		<>
			<PayPalButton
				paypalOptions={paypalOptions}
				buttonStyles={buttonStyles}
				amount={sum.toFixed(2)}
				onSuccess={(data) => {
					//status,
					console.log('success', data);
					handleSubmit(currentOrder);
				}}
				onError={(error) => handlePayError(error)}
				// onApprove={(data) => {
				// 	alert('aprovado');
				// 	// handleSubmit(currentOrder);
				// }}
				onCancel={(data) => handleCancelPay(data)}
			/>
		</>
	);
}

export default PaypalButton