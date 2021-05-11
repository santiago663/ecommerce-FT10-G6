/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PayPalButton } from 'react-paypal-button-v2';
import { formGuestOrder, formUserOrder } from '../../redux/actions/actionOrder';
import { cleanShoopingCart, sendEmailOrderSuccess } from '../../redux/actions/actionFront';
import { editProductStock } from "../../redux/actions/actionStock-Review";
import Swal from 'sweetalert2';


function PaypalButton({input} ) {
	
	const dispatch = useDispatch();
	const currentUser = useSelector((store) => store.auth.currentUser);
	const currentOrder = useSelector((store) => store.reducerOrderUser.currentOrder);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const reducer = (accumulator, currentValue) => Number(currentValue.price) + accumulator;
	let guestOrder = JSON.parse(localStorage.getItem("guestOrderDetails"));


	const userOrderProducts = { product: [], stock: [] }
	shoppingCart?.map(product => { userOrderProducts.product.push(product.id); userOrderProducts.stock.push(product.stock) })

	let sum = shoppingCart.reduce(reducer, 0) / 92;
	const total = shoppingCart.reduce(reducer, 0);

	let guestProducts = JSON.parse(localStorage.getItem("orderProducts"));


	const paypalOptions = {
		client: 'AYmPjFXX8C_i4P9C4XuJpymRIDt-W6Ne5nqPoCW9RVl88AVVWi_2NZi8zk_tHa9FWV-fxZF9ItioLcJF',
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
				localStorage.setItem("completed", JSON.stringify({ status: true }));
				dispatch(editProductStock({ ...userOrderProducts, stock: userOrderProducts.stock.map(stock => stock == null ? null : stock - 1) }));

				Swal.fire({
					title: 'Completed',
					text: 'Thanks for trusting us',
					icon: 'info', confirmButtonText: 'Cool'
				})
					.then(() => {
						let user = { id: currentOrder[0].id, state: 'completed', payment: paymentId, methodId: 3 };
						console.log(user)
						dispatch(formUserOrder(user));
					})
					.then(() => {
						dispatch(cleanShoopingCart())
						window.history.back();
					})
					.then(() => {
						dispatch(
							sendEmailOrderSuccess({
								name: currentUser.name,
								orderId: currentOrder[0].id,
								email: currentUser.email,
								state: "completed",
							})
						)
					}
					)
					.then(() => {
						localStorage.setItem("completed", JSON.stringify(""))
					})
					.then(() => {
						dispatch(cleanShoopingCart())
						location.assign("/browser/products")
					})
			} catch (err) {
				console.error(err.message);
			}
		} else {
			try {

				localStorage.setItem("completed", JSON.stringify({ status: true }));
				input.payment = paymentId;
				input.methodId = 3;
				input.total = total;

				//descuento el stock en el back
				dispatch(editProductStock({ product: guestProducts.map(product => product.id), stock: guestProducts.map(product => product.stock == null ? null : product.stock - 1) }));

				dispatch(formGuestOrder(input))
					.then(() => {
						return (guestOrder = JSON.parse(
							localStorage.getItem("guestOrderDetails")
						));
					})
					.then(() => {
						dispatch(
							sendEmailOrderSuccess({
								name: guestOrder.name,
								orderId: guestOrder.orderId,
								email: guestOrder.email,
								state: "completed",
							})
						)
					})
					.then(() =>
						Swal.fire({
							title: 'Completed',
							text: 'Thanks for trusting us',
							icon: 'info',
							confirmButtonText: 'Cool',
						})
					)
					.then(() => {
						localStorage.setItem("completed", JSON.stringify(""))
					})
					.then(() => {
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
		
		Swal.fire({title: 'Error',text: `We could not complete the purchase please try again`,icon: 'warning',confirmButtonText: 'OK',})
		

		console.error(error);
		
	};

	const handleCancelPay = (data) => {
			
			Swal.fire({title: 'Canceled',text: `the purchase was canceled, please take the transaction number: ${data.id}`,icon: 'warning',confirmButtonText: 'OK',})
			
	};

	return (
		<>
			<PayPalButton
				paypalOptions={paypalOptions}
				buttonStyles={buttonStyles}
				amount={sum.toFixed(2)}
				onSuccess={(data) => {handlePaypal(currentOrder, data.id);}}
				onError={(error) => handlePayError(error)}
				onCancel={(data) => handleCancelPay(data)}
			/>
		</>
	);
}


export default PaypalButton;
