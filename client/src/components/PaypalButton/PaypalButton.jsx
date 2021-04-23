/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {PayPalButton}  from 'react-paypal-button-v2';


function PaypalButton({ handleSubmit }) {
	const dispatch = useDispatch();

	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	let sum = shoppingCart.reduce(reducer, 0) / 92;

	const paypalOptions = {
		client: 'AdbNICxqoNl8uNCVRJmT0g40u_AxW6gmU7k8ldvUJamnekCgcewwCxoqG8csJylNS0D2FaCgzfAJzN5T',
		intent: 'capture',
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	};

	const handlePayError = (error) => {
		alert('We could not make the payment, Please try again');
		console.error(error);
		//dispatch
	};

	const handleCancelPay = (data) => {
		console.log('cancel', data);
		//dispatch
	};

	return (
		<>
			<PayPalButton
				paypalOptions={paypalOptions}
				buttonStyles={buttonStyles}
				amount={sum.toFixed(2)}
				onSuccess={(data) => {
					//status,
					
					handleSubmit(null,null,currentOrder,'paypal');
				}}
				onError={(error) => handlePayError(error)}
				onCancel={(data) => handleCancelPay(data)}
			/>
		</>
	);
}

export default PaypalButton;