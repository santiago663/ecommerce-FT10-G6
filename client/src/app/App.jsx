/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import routes from '../routes/routes';
import { getAllProducts, getAllAuthors, getAllCategories, getAllSeries, getAllUsers, getAllOrders, getAllrRoles } from '../redux/actions/actionBack';
import '../scss/containers/_app.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAuthors());
    dispatch(getAllCategories());
    dispatch(getAllSeries());
    dispatch(getAllUsers());
    dispatch(getAllOrders());
    dispatch(getAllrRoles());
  }, []);

  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;
