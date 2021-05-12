/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import routes from "../routes/routes";
import { getAllProducts } from "../redux/actions/actionProducts-Discounts";
import { getAllAuthors } from "../redux/actions/actionAuthors";
import { getAllCategories, getAllSeries } from "../redux/actions/actionCategories-Series";
import { getUserWhislist } from "../redux/actions/actionWishlist"
import { getLocalStorageGuest } from "../redux/actions/actionFront";
import { getCurrentOrder, getAllUserOrders } from "../redux/actions/actionOrder";
import { setCurrentUser } from "../redux/actions/auth";
import "../scss/containers/_app.scss";

function App() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAuthors());
    dispatch(getAllCategories());
    dispatch(getAllSeries());

    if (currentUser) {
      dispatch(getCurrentOrder(currentUser.id));
      dispatch(setCurrentUser(currentUser));
      dispatch(getAllUserOrders(currentUser.id));
      dispatch(getUserWhislist(currentUser.id))
    } else {
      dispatch(getLocalStorageGuest());
    }
  }, []);

  return <div className="App">{routes()}</div>;
}

export default App;
