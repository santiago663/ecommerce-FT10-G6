/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUserReview } from "../../redux/actions/actionBack";
import { getAllUserOrders } from "../../redux/actions/actionOrder";
import "../../scss/components/_reviews.scss";

function Reviews({ currentUser, productId }) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser.id) dispatch(getAllUserOrders(currentUser.id))
    }, [currentUser?.id]);

    const productReview = useSelector(
        (store) => store.reducerProduct.productReview
    );
    const userOrders = useSelector(
        (store) => store.reducerOrderUser.userOrders
    );    

    //filtro por las ordenes completadas
    let completedUserOrder = userOrders.filter(order => order.state === "completed")

    //Verifico si puedo dejar un review
    let canReview = completedUserOrder.filter(order => order.products.find(product => product.id == productId))
    if (productReview.find(review => review.userId == currentUser.id)) canReview = false

    //Add review
    const [review, setReview] = useState({ comment: "", score: 1 })

    function submitReview(event) {
        dispatch(postUserReview(productId, currentUser.id, review))
    }

    function handleInputChangeSc(event) {
        event.preventDefault()
        setReview({ ...review, score: Number(event.target.value) })
    }

    function handleInputChangeCo(event) {
        event.preventDefault()
        setReview({ ...review, comment: event.target.value })
    }

    var key = 1

    return (
        <div className="review-cont">
            <div>
                <p className="reviewTitle">Reviews</p>
                {productReview[0] ? productReview.map(review =>
                    <div className="reviewComment">
                        <div>{review.score} <i className="far fa-star"></i></div>
                        <div className="nameAndComment">{review.user.name}<p>{review.comment}</p></div>
                    </div>
                )
                    :
                    <span className="noReviewsYet">No reviews yet  :(</span>
                }
            </div>
            {canReview[0] ?
                <div className="add-review">
                    <span>Add review</span>
                    <div>
                        <form>
                            <div className="reviewForm">
                                <span className="spanAddReview">Score</span>
                                <select name="score" id="reviewScoreSelector" onChange={handleInputChangeSc}>
                                    {[1, 2, 3, 4, 5].map((x) => <option key={`PD${key++}`} value={x}>{x}</option>)}
                                </select>
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
        </div>
    )
}

export default Reviews;