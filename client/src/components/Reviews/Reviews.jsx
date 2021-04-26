/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUserReview, updateReviewProduct, deleteUserReview, editUserReview } from "../../redux/actions/actionBack";
import { allProductsScores, filterNewProductReviews, filterAllProductReviews } from "../../redux/actions/actionFront"
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
    const newReviews = useSelector((store) => store.reducerProduct.newProductReviews);
    const newProductReview = newReviews.filter(review => review.productId == productId)

    //filtro por las ordenes completadas
    let completedUserOrder = userOrders.filter(order => order.state === "completed")

    //Verifico si puedo dejar un review
    let canReview = completedUserOrder.filter(order => order.products.find(product => product.id == productId))
    if (productReview.find(review => review.userId == currentUser.id)) canReview = false 

    //Add review states
    const [review, setReview] = useState({ comment: "", score: 0 })
    const [eReview, setNewReview] = useState({ comment: "", score: 0 })
    const [allProductReviews, setProductReviews] = useState([])
    const [change, setChange] = useState({ a: true, b: true, c: true, d: true, e: true, f: true, g: true })
    const [canReview2, setCanReview2] = useState({a: false})

    //Guardo los reviews del producto en un state
    useEffect(() => {
        if (productReview[0]) setProductReviews(productReview.filter(product => product.productId == productId))        
    }, [productReview[0]])

    //guardo los nuevos reviews cuando se agregan
    useEffect(() => {        
        if (newProductReview?.slice(-1)[0]?.id !== "delete") {
            setProductReviews([...newProductReview])
            setChange({ ...change, a: false, e: false })
        }
        else if (newProductReview?.slice(-1)[0]?.id == "delete") {
            setProductReviews([])
            setChange({ ...change, a: false, e: false })
        }
    },[newProductReview?.slice(-1)[0]?.updatedAt])

    //Modifico el score del producto en el back
    useEffect(() => {        
        if (!change.e) {             
            var newScore;
            if (!allProductReviews[0]) newScore = "-"
            else newScore = (allProductReviews.map(review => review.score).reduce((a, b) => a + b) / allProductReviews.length).toFixed(1)
            //aprovecho de modificar allScores con el nuevo score para despacharlo en el siguiente useEffect
            if (allScores.find(product => product.id == productId)) {
                allScores.find(product => product.id == productId).score = newScore.toString()
            }
            dispatch(updateReviewProduct(productId, newScore.toString()))
            setChange({ ...change, b: false, e: true })
        }
    }, [change.a])

    //Ultimo useEffect para modificar los scores de los productos en el front
    useEffect(() => {
        if (allScores && !change.b) {
            dispatch(allProductsScores(allScores))
            setChange({ ...change, a: true, b: true })
        }
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
        setChange({ ...change, c: true })
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
            setChange({ ...change, f: false })
        }
        else setChange({ ...change, c: false })
    }

    //submit edit
    function submitReviewEdit(event) {        
        event.preventDefault()
        if (eReview.score) {
            dispatch(editUserReview(allProductReviews.find(review => review.userId == currentUser?.id).id, {...eReview, productId}))
            setChange({ ...change, d: true })
        }
        else setChange({ ...change, c: false })
    } 

    //funcion para abrir input de edit review
    function editReview() {
        setChange({ ...change, d: false })
    }    

    //borrar un review
    function deleteReview() {
        dispatch(deleteUserReview(allProductReviews.find(review => review.userId == currentUser?.id).id))
        setProductReviews(allProductReviews.filter(review => review.userId != currentUser.id))
        dispatch(filterAllProductReviews(allProductReviews.filter(review => review.userId != currentUser.id)))
        dispatch(filterNewProductReviews(
            allProductReviews.filter(review => review.userId != currentUser.id)[0] ?
            allProductReviews.filter(review => review.userId != currentUser.id) :
            [{id: "delete"}]
        ))
        setCanReview2({a:true})
        setChange({ ...change, a: true, e: false, f: true })
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
            {(canReview[0] || canReview2.a) && change.f ?
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
