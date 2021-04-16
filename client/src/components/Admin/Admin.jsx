/*eslint-disable*/
import React from 'react';
import Dashboard from './Dashboard'
import '../../scss/components/_admin.scss';

import { useSelector} from 'react-redux';

function Admin() {

  const storE = useSelector((store) => store);
    // console.log(storE,"StOrE")

  return (
    <div className="Admin">
      <Dashboard />
    </div>
  );
}

export default Admin;
