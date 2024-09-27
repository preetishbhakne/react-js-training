import { useState } from 'react';

import { configure } from '@testing-library/react';
import { dataServiceObj } from '../service/DataServiceEmpApp';

 

function  EmpComponent()
{
    const [deptno, setDeptno] = useState("");
    const [empname, setempname] = useState("");
    const [empjob, setempjob] = useState("");
    const[empsalary,setempsalary]=useState("");
    const[empno,setempno]=useState("");

  const [deptsArray, setDeptsArray] = useState([]); 

  function getDeptsClick()
  {
       dataServiceObj.getAllDepartments().then((resData) =>  
        {          
            setDeptsArray(resData.data);
        });
   }

   function addDeptClick()
   {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.empname = empname;
        deptObj.empjob = empjob;
        

        dataServiceObj.addDepartment(deptObj).then( (resData) => 
        {
            alert("New Dept Added to server");
            getDeptsClick();
            clearFields();
        });
   }


   function deleteDeptClick(deptno)
   {
       if(window.confirm("Do you want to Delete?"))
       {
            dataServiceObj.deleteDepartment(deptno).then( (resData) => 
                {
                    alert("Selected Dept deleted from server");
                    getDeptsClick();                   
                });
       }
   }

   function selectDeptClick(deptno)
   {
    dataServiceObj.getDepartmentById(deptno).then( (resData) => 
    {
        let deptObj = resData.data;
        setDeptno(deptObj.deptno);
        setempname(deptObj.empname);
        setempjob(deptObj.empjob);
    });
      
   }

   function updateDeptClick()
   {
        let deptObj = {};
        deptObj.deptno = deptno;
        deptObj.empname = empname;
        deptObj.empjob = empjob;

        dataServiceObj.editDepartment(deptObj).then( (resData) => 
        {
            alert("Dept details are updated in server");
            getDeptsClick();
            clearFields();
        });
   }


   function clearFields(){
        setDeptno("");
        setempname("");
        setempjob("");
   }


  var result =  deptsArray.map( (item, index) => 
  <tr key={index}>  
     <td> {item.deptno}  </td> 
     <td> {item.empname}  </td> 
     <td> {item.empjob}  </td> 
     <td align='center'>
        
        <a href="javascript:void(0);" onClick={() => selectDeptClick(item.deptno)}>Select</a> |
        <a href="javascript:void(0);" onClick={() => deleteDeptClick(item.deptno)}>Delete</a>
     </td>
  </tr>);

    return (
        <>
          <h3>Server Communication in React JS</h3>
          <hr/>

          <input placeholder="empno" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />

            <input placeholder="empname" type="text"
                value={empname} onChange={(e) => setempname(e.target.value)} />

            <input placeholder="empjob" type="text"
                value={empjob} onChange={(e) => setempjob(e.target.value)} />
            <input placeholder="emempsalary" type="text"
                value={empjob} onChange={(e) => setempjob(e.target.value)} />
            <input placeholder="deptno" type="text"
                value={empjob} onChange={(e) => setempjob(e.target.value)} />
                
          <hr/>
          <button  onClick={getDeptsClick}>Get All Depts</button>
          <button  onClick={addDeptClick}>Add Dept </button>
          <button  onClick={updateDeptClick}>Update Dept </button>
          <hr/>

          <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr>
                    <th>Emp no</th>
                    <th>Emp name</th>
                    <th>Job</th> 
                    <th>Salary</th> 
                    <th>Dept No</th> 
                </tr>
                {result}
            </table>

        </>
    );
}

export default EmpComponent;