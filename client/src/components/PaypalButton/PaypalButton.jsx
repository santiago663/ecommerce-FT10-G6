/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {PayPalButton}  from 'react-paypal-button-v2';
import { formGuestOrder, formUserOrder } from '../../redux/actions/actionOrder';
import { editProductStock } from "../../redux/actions/actionBack";
import {cleanShoopingCart} from '../../redux/actions/actionFront'
import Swal from 'sweetalert2';

function PaypalButton({input} ) {

	const dispatch = useDispatch();
	const currentUser = useSelector((store) => store.auth.currentUser);
	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	
	const userOrderProducts = {product: [], stock: []}
	shoppingCart?.map(product => {userOrderProducts.product.push(product.id); userOrderProducts.stock.push(product.stock)})

	console.log(userOrderProducts)

	let sum = shoppingCart.reduce(reducer, 0) / 92;
	const total = shoppingCart.reduce(reducer, 0);

	let guestProducts = JSON.parse(localStorage.getItem("orderProducts"));	
	const beforeOrder = JSON.parse(localStorage.getItem("beforeOrder"));

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
				dispatch(formUserOrder(user));
				dispatch(editProductStock({...userOrderProducts, stock: userOrderProducts.stock.map(stock => stock == null ? null : stock-1 )}));
				
				Swal.fire({
					title:'Completed',
					text: 'Thanks for trusting us',
					icon:'info',confirmButtonText: 'Cool'
				})
				.then (()=>{
					dispatch(cleanShoopingCart())				
					location.assign("/browser/products")
				})				
			} catch (err) {
				console.error(err.message);
			}
		} else {
			try {
				input.payment = paymentId;
				input.methodId = 3;
				input.total = total;

				//descuento el stock en el back
				dispatch(editProductStock({product: guestProducts.map(product => product.id), stock: guestProducts.map(product => product.stock == null ? null : product.stock - 1 )}));
				
				dispatch(formGuestOrder(input));
				Swal.fire({
					title: 'Completed',
					text: 'Thanks for trusting us',
					icon: 'info',
					confirmButtonText: 'Cool',
				})
				.then(()=>{
					dispatch(cleanShoopingCart());
					window.history.back();
					localStorage.clear();
					location.assign("/browser/products")
				})

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