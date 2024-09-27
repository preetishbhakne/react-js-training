import React from 'react';

import Assd1 from './api';
import AjaxDemo1 from './AjaxDemo1';

import UserCards from './AjaxGetUsers';
import AjaxDemo2 from './AjaxDemo2';
import AjaxDemo3 from './components/Component_AjaxDemo3';
import EmpComponent from './components/Component_Emp';
 
function App() {
  return (
    <div>
      <h3>Server communication in React App using Axios Library</h3>
      <hr/>
      {/* //<UserCards/> */}
      {/* <Assd1 /> */}
      <hr/>
      {/* <CitiesList />
      <hr/>
      <DeptDetails />
      <hr/>
      <DeptList /> */}
      <EmpComponent />

 
    </div>
  );
}

export default App;
