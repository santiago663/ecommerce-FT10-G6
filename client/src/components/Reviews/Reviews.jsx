/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUserReview, updateReviewProduct, deleteUserReview, editUserReview } from "../../redux/actions/actionBack";
import { allProductsScores } from "../../redux/actions/actionFront"
import { getAllUserOrders } from "../../redux/actions/actionOrder";
import "../../scss/components/_reviews.scss";

function Reviews({ currentUser, productId }) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser.id) dispatch(getAllUserOrders(currentUser.id))
    }, [currentUser?.id]);

    const productReview = useSelector((store) => store.reducerProduct.productReview);
    const userOrders = useSelector((store) => store.reducerOrderUser.userOrders);
    const allScores = useSelector((store) => store.reducerProduct.allProductsScores);
    const newReview = useSelector((store) => store.reducerProduct.newProductReviews);

    //filtro por las ordenes completadas
    let completedUserOrder = userOrders.filter(order => order.state === "completed")

    //Verifico si puedo dejar un review
    let canReview = completedUserOrder.filter(order => order.products.find(product => product.id == productId))
    if (productReview.find(review => review.userId == currentUser.id)) canReview = false

    //saco el promedio del score
    let score;
    if (productReview.map(review => review.score)[0]) {
        score = (productReview.map(review => review.score).reduce((a, b) => a + b) / productReview.length).toFixed(1)
    }

    //Add review states
    const [review, setReview] = useState({ comment: "", score: 0 })
    const [eReview, setNewReview] = useState({ comment: "", score: 0 })
    const [allProductReviews, setProductReviews] = useState([])
    const [change, setChange] = useState({ a: true, b: true, c: true, d: true })

    //Guardo los reviews del producto en un state
    useEffect(() => {
        if (productReview[0]) setProductReviews(productReview.filter(product => product.productId == productId))
    }, [productReview[0]])

    //Modifico el score del producto en el back
    useEffect(() => {
        if (review.score) {
            var newScore = (allProductReviews.map(review => review.score).reduce((a, b) => a + b) / allProductReviews.length).toFixed(1)
            if (allScores.find(product => product.id == productId)) {
                allScores.find(product => product.id == productId).score = newScore.toString()
            }
            dispatch(updateReviewProduct(productId, newScore.toString()))
            setChange({ ...change, b: false })
        }
    }, [change.a])

    //Modifico los scores de los productos en el front
    useEffect(() => {
        if (allScores) dispatch(allProductsScores(allScores))
    }, [change.b])

    //handle score
    function handleInputChangeSc(event) {
        event.preventDefault()
        setChange({ ...change, c: true })
        setReview({ ...review, score: Number(event.target.value) })
    }
    //handle score edit
    function handleInputChangeScEdit(event) {
        event.preventDefault()
        // setChange({ ...change, c: true })
        setNewReview({ ...eReview, score: Number(event.target.value) })
    }

    //handle comment
    function handleInputChangeCo(event) {
        event.preventDefault()
        setReview({ ...review, comment: event.target.value })
    }
    //handle comment edit
    function handleInputChangeCoEdit(event) {
        event.preventDefault()
        setNewReview({ ...eReview, comment: event.target.value })
    }

    //submit
    function submitReview(event) {
        event.preventDefault()
        if (review.score) {
            dispatch(postUserReview(productId, currentUser.id, review))

        }
        else setChange({ ...change, c: false })
    }

    //submit edit
    function submitReviewEdit(event) {        
        event.preventDefault()
        if (eReview.score) {
            dispatch(editUserReview(allProductReviews.find(review => review.userId == currentUser?.id).id, eReview))
            // setProductReviews(allProductReviews.slice(0, allProductReviews.length - 1))
            setChange({ ...change, d: true })
        }
        // else setChange({ ...change, c: false })
    }

    useEffect(() => {
        if (newReview.slice(-1)[0]?.id) {
            setChange({ ...change, a: false })
            setProductReviews([...allProductReviews, ...newReview.slice(-1)])
        }
    }, [newReview?.slice(-1)[0]?.id])

    function editReview() {
        setChange({ ...change, d: false })
    }

    function deleteReview() {
        dispatch(deleteUserReview(allProductReviews.find(review => review.userId == currentUser?.id).id))
        setProductReviews(allProductReviews.slice(0, allProductReviews.length - 1))
    }

    var key = 1

    return (
        <div className="review-cont">
            <div>
                <p className="reviewTitle">Reviews</p>
                {allProductReviews[0] ? allProductReviews.map(review =>
                    <div className="reviewComment">
                        <div>{review.score} <i className="far fa-star"></i></div>
                        <div className="nameAndComment">{review.user.name}<p>{review.comment}</p></div>
                        {review.userId == currentUser?.id &&
                            <div>
                                <button className="reviewButton" onClick={editReview}>...</button>
                                <button className="reviewButton" onClick={deleteReview}>X</button>
                            </div>
                        }
                    </div>
                )
                    :
                    <span className="noReviewsYet">No reviews yet  :(</span>
                }
            </div>
            {canReview[0] && change.a ?
                <div className="add-review">
                    <span>Add review</span>
                    <div>
                        <form>
                            <div className="reviewForm">
                                <span className="spanAddReview">Score</span>
                                <select name="score" id="reviewScoreSelector" onChange={handleInputChangeSc}>
                                    {["Select", 1, 2, 3, 4, 5].map((x) => <option key={`PD${key++}`} value={x}>{x}</option>)}
                                </select>
                                <span className={!change.c ? "selectScore" : "selectScoreHide"}> Select a score</span>
                            </div>
                            <div className="divAddReview">
                                <span className="spanAddReview">Comment</span>
                                <textarea className="inputReviewComment" type="text" name="comment" onChange={handleInputChangeCo} />
                            </div>
                            <div className="divReviewButton">
                                <input className="inputSubmit" type="submit" value="Add" onClick={submitReview} />
                            </div>
                        </form>
                    </div>
                </div>
                :
                <span></span>
            }
            {!change.d ?
                <div className="add-review">
                    <span>Edit review</span>
                    <div>
                        <form>
                            <div className="reviewForm">
                                <span className="spanAddReview">Score</span>
                                <select name="score" id="reviewScoreSelector" onChange={handleInputChangeScEdit}>
                                    {["Select", 1, 2, 3, 4, 5].map((x) => <option key={`PD${key++}`} value={x}>{x}</option>)}
                                </select>
                                <span className={!change.c ? "selectScore" : "selectScoreHide"}> Select a score</span>
                            </div>
                            <div className="divAddReview">
                                <span className="spanAddReview">Comment</span>
                                <textarea className="inputReviewComment" type="text" name="comment" onChange={handleInputChangeCoEdit} />
                            </div>
                            <div className="divReviewButton">
                                <input className="inputSubmit" type="submit" value="Add" onClick={submitReviewEdit} />
                            </div>
                        </form>
                    </div>
                </div>
                :
                <span></span>

            }
        </div>
    )
}

export default Reviews;
