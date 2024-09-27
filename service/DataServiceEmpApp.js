import axios from 'axios';

export let dataServiceObj = 
{
     
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee     
};

let url =  "http://localhost:4500/depts/";

 

function  getAllEmployees(){
    
    return axios.get(url);
}


function  getEmployeeById(id){
     
    return axios.get(url+ id);
}

function  addEmployee(deptObj){
    
    return axios.post(url, deptObj);
}

function  editEmployee(deptObj){     
    return axios.put(url + deptObj.deptno, deptObj);
}


function  deleteEmployee(id){     
    return axios.delete(url + id);
}