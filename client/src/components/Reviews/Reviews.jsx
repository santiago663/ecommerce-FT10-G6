/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postUserReview, updateReviewProduct } from '../../redux/actions/actionStock-Review';
import { deleteUserReview, editUserReview } from "../../redux/actions/actionStock-Review"
import { allProductsScores, filterNewProductReviews, filterAllProductReviews } from '../../redux/actions/actionFront';
import { upgradeEditProducts } from '../../redux/actions/actionUpgrade';
import ChangeColor from '../FunctionStar/ChangeColor';
import FunctionStar from '../FunctionStar/FunctionStar';
import '../../scss/components/_reviews.scss';

function Reviews({ currentUser, productId }) {
	const dispatch = useDispatch();

	const productReview = useSelector((store) => store.reducerProduct.productReview);
	const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
	const allScores = useSelector((store) => store.reducerProduct.allProductsScores);
	const allProduct = useSelector((store) => store.reducerProduct.allProductCache);

	useEffect(() => {
		if (!allScores[0]) {
			dispatch(
				allProductsScores(
					allProduct.map((product) => {
						return { id: product.id, score: product.score };
					})
				)
			);
		}
	}, [currentUser?.id]);

	//filtro por las ordenes completadas
	let completedUserOrder = userOrders.filter((order) => order.state === 'completed');

	//Verifico si puedo dejar un review
	let canReview = completedUserOrder.filter((order) => order.products.find((product) => product.id == productId));
	if (productReview.find((review) => review.userId == currentUser.id)) canReview = false;

	//Add review states
	const [review, setReview] = useState({ comment: '', score: 0 });
	const [eReview, setNewReview] = useState({ comment: '', score: 0 });
	const [allProductReviews, setProductReviews] = useState([]);
	const [change, setChange] = useState({ a: true, b: true, c: true, d: true, e: true, f: true });
	const [canReview2, setCanReview2] = useState({ a: false });

	//Guardo los reviews del producto en un state
	useEffect(() => {
		if (productReview?.slice(-1)[0]?.id !== 'delete') {
			setProductReviews(productReview);
			setChange({ ...change, a: false, e: false });
		} else if (productReview?.slice(-1)[0]?.id == 'delete') {
			setProductReviews([]);
			setChange({ ...change, a: false, e: false });
		}
	}, [productReview[0], productReview[0]?.id, productReview?.slice(-1)[0]?.updatedAt]);

	//Modifico el score del producto en el back
	useEffect(() => {
		if (!change.e) {
			var newScore;
			if (!allProductReviews[0]) newScore = null;
			else
				newScore = (
					allProductReviews.map((review) => review.score).reduce((a, b) => a + b) / allProductReviews.length
				).toFixed(1);
			//aprovecho de modificar allScores con el nuevo score para despacharlo en el siguiente useEffect
			if (allScores.find((product) => product.id == productId)) {
				allScores.find((product) => product.id == productId).score = newScore ? newScore.toString() : newScore;
			}
			if (allProduct.find((product) => product.id == productId)) {
				allProduct.find((product) => product.id == productId).score = newScore ? newScore.toString() : newScore;
			}
			dispatch(updateReviewProduct(productId, newScore ? newScore.toString() : newScore));
			setChange({ ...change, b: false, e: true });
		}
	}, [change.a]);

	//Ultimo useEffect para modificar los scores de los productos en el front
	useEffect(() => {
		if (allScores && !change.b) {
			dispatch(allProductsScores(allScores));
			dispatch(upgradeEditProducts(allProduct));
			setChange({ ...change, a: true, b: true });
		}
	}, [change.b]);

	//handle score
	function handleInputChangeSc(event) {
		event.preventDefault();
		setChange({ ...change, c: true });
		if (event.target.name == 'score') setReview({ ...review, score: Number(event.target.value) });
		if (event.target.name == 'scoreEdit') setNewReview({ ...eReview, score: Number(event.target.value) });
	}

	//handle comment
	function handleInputChangeCo(event) {
		event.preventDefault();
		if (event.target.name == 'comment') setReview({ ...review, comment: event.target.value });
		if (event.target.name == 'commentEdit') setNewReview({ ...eReview, comment: event.target.value });
	}

	//submit add modifica el review en el back
	function submitReview(event) {
		event.preventDefault();
		if (review.score) {
			dispatch(postUserReview(productId, currentUser.id, review));
			setChange({ ...change, f: false });
		} else setChange({ ...change, c: false });
	}

	//submit edit modifica el review en el back
	function submitReviewEdit(event) {
		event.preventDefault();
		if (eReview.score) {
			dispatch(
				editUserReview(allProductReviews.find((review) => review.userId == currentUser?.id).id, {
					...eReview,
					productId,
				})
			);
			setChange({ ...change, d: true });
		} else setChange({ ...change, c: false });
	}

	//funcion para abrir input de edit review
	function editReview() {
		setChange({ ...change, d: false });
		setNewReview(productReview.find((review) => review.userId == currentUser.id));
	}

	//borrar un review
	function deleteReview() {
		dispatch(deleteUserReview(allProductReviews.find((review) => review.userId == currentUser?.id).id));
		setProductReviews(allProductReviews.filter((review) => review.userId != currentUser.id));
		dispatch(filterAllProductReviews(allProductReviews.filter((review) => review.userId != currentUser.id)));
		dispatch(
			filterNewProductReviews(
				allProductReviews.filter((review) => review.userId != currentUser.id)[0]
					? allProductReviews.filter((review) => review.userId != currentUser.id)
					: [{ id: 'delete' }]
			)
		);
		setCanReview2({ a: true });
		setChange({ ...change, a: true, e: false, f: true });
	}

	var key = 1;

	return (
		<div className="review-cont">
			<div className="review-cont-divisor">
				<p className="reviewTitle">Reviews</p>
				{allProductReviews[0] ? (
					allProductReviews.map((review) => (
						<div className="reviewComment">
							<div className="scoreDet">{FunctionStar(review.score)}</div>
							<div className="nameAndComment">
								{review.user.name}
								<p>{review.comment}</p>
							</div>
							{review.userId == currentUser?.id && (
								<div className="buttons-review">
									<button className="reviewButton" onClick={editReview}>
										...
									</button>
									<button
										className={change.d ? 'reviewButton' : 'reviewButtonHide'}
										onClick={deleteReview}
									>
										X
									</button>
								</div>
							)}
						</div>
					))
				) : (
					<span className="noReviewsYet">No reviews yet :(</span>
				)}
			</div>
			<br />
			{(canReview[0] || canReview2.a) && change.f ? (
				<div className="add-review">
					<span>Add review</span>
					<div className="contFormReview">
						<form>
							<div className="reviewForm">
								<span className="spanAddReview">Score</span>
								<ChangeColor onChange={(value) => setReview({ ...review, score: value })} />
								{/* <select name="score" id="reviewScoreSelector" onChange={handleInputChangeSc}>
                {["Select", 1, 2, 3, 4, 5].map((x) => <option key={`PD${key++}`} value={x}>{x}</option>)}
                </select> */}
								<span className={!change.c ? 'selectScore' : 'selectScoreHide'}> Select a score</span>
							</div>
							<div className="divAddReview">
								<span className="spanAddReview">Comment</span>
								<textarea
									className="inputReviewComment"
									type="text"
									name="comment"
									onChange={handleInputChangeCo}
								/>
							</div>
							<div className="divReviewButton">
								<input className="inputSubmit" type="submit" value="Add" onClick={submitReview} />
							</div>
						</form>
					</div>
				</div>
			) : (
				<span></span>
			)}
			<br />
			{!change.d ? (
				<div className="add-review">
					<span>Edit review</span>
					<div className="contFormReview">
						<form>
							<div className="reviewForm">
								<span className="spanAddReview">Score</span>
								<ChangeColor onChange={(value) => setNewReview({ ...eReview, score: value })} />
								{/* <select
									name="scoreEdit"
									id="reviewScoreSelector"
									value={eReview.score}
									onChange={handleInputChangeSc}
								>
									{['Select', 1, 2, 3, 4, 5].map((x) => (
										<option key={`PD${key++}`} value={x}>
											{x}
										</option>
									))}
								</select> */}
								<span className={!change.c ? 'selectScore' : 'selectScoreHide'}> Select a score</span>
							</div>
							<div className="divAddReview">
								<span className="spanAddReview">Comment</span>
								<textarea
									className="inputReviewComment"
									type="text"
									value={eReview.comment}
									name="commentEdit"
									onChange={handleInputChangeCo}
								/>
							</div>
							<div className="divReviewButton">
								<input className="inputSubmit" type="submit" value="Add" onClick={submitReviewEdit} />
							</div>
						</form>
					</div>
				</div>
			) : (
				<span></span>
			)}
		</div>
	);
}

export default Reviews;
