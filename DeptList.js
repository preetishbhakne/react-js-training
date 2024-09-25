function  DeptList()
{
      // Array of Objects
  let deptsArray = [
    { deptno: 10, dname: "Accounts", loc: "Hyd" },
    { deptno: 20, dname: "Sales", loc: "Pune" },
    { deptno: 30, dname: "Marketing", loc: "Hyd" },
    { deptno: 40, dname: "Operations", loc: "Chennai" },
  ];


  let result =   deptsArray.map( (item, index) => {

    return (
        <tr key={index}>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.loc}</td>
        </tr>
    );

  });
  
    return (
        <>
			<h3>Working with Array of Objects</h3>

            <table border="2" width="600">
                <tr>
                    <th>Deptno</th>
                    <th>Dname</th>
                    <th>Location</th>
                </tr>
                {result}
            </table>

        </>
    );
}

export default DeptList;