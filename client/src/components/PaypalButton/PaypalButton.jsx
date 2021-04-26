/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {PayPalButton}  from 'react-paypal-button-v2';
import { formGuestOrder, formUserOrder } from '../../redux/actions/actionOrder';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function PaypalButton({input} ) {

	const dispatch = useDispatch();
	const currentUser = useSelector((store) => store.auth.currentUser);
	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	let sum = shoppingCart.reduce(reducer, 0) / 92;
	const total = shoppingCart.reduce(reducer, 0);
const history = useHistory();
	const paypalOptions = {
		client: 'AdbNICxqoNl8uNCVRJmT0g40u_AxW6gmU7k8ldvUJamnekCgcewwCxoqG8csJylNS0D2FaCgzfAJzN5T',
		intent: 'capture',
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	};

	const handlePaypal = async (currentOrder, paymentId) => {
		
		if (currentUser.id) {
			try {

				let user = { id: currentOrder[0].id, state: 'completed', payment: paymentId, methodId: 3 };
				console.log("useeeeeer--->",user)
				dispatch(formUserOrder(user));
				// Swal.fire('Saved!', '', 'success');
				alert('banca')
				localStorage.clear();
				// history.push('Browser/products');
			} catch (err) {
				console.error(err.message);
			}
		} else {
			try {
				input.payment = paymentId;
				input.methodId = 3;
				input.total = total;
				console.log('inpuuuut--->', input);
				dispatch(formGuestOrder(input));
				// Swal.fire('Saved!', '', 'success');
				alert('banca')
				// history.push('Browser/products');
				localStorage.clear();
			} catch (err) {
				console.error(err.message);
			}
		}
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
					handlePaypal(currentOrder, data.id);
				}}
				onError={(error) => handlePayError(error)}
				onCancel={(data) => handleCancelPay(data)}
			/>
		</>
	);
}
//

export default PaypalButton;