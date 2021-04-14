/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import routes from '../routes/routes';
import { getAllProducts, getAllAuthors, getAllCategories, getAllSeries } from '../redux/actions/actionBack';
import '../scss/containers/_app.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllAuthors());
    dispatch(getAllCategories());
    dispatch(getAllSeries());
  }, []);

  return (
    <div className="App">
      {routes()}
    </div>
  );
}

export default App;
