/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import routes from '../routes/routes';
import { getAllProducts, getAllAuthors, getAllCategories, getAllSeries, getAllUsers, getAllOrders, getAllrRoles } from '../redux/actions/actionBack';
import { getCurrentOrder } from '../redux/actions/actionOrder'
import '../scss/containers/_app.scss';
import { setCurrentUser } from '../redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAuthors());
    dispatch(getAllCategories());
    dispatch(getAllSeries());

    if (currentUser) {
      dispatch(getCurrentOrder(currentUser.id))
      dispatch(setCurrentUser(currentUser))
    } else {
      // dispatch(getLStorageProducts())
    }

  }, []);

  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;
