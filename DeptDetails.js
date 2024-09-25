function DeptDetails() {

    let deptObj = { deptno: 10, dname: "Accounts", loc: "Hyd" };

    return (
        <>
            <div>
                <h3>Single Object</h3>
                Dept Number  :   {deptObj.deptno}    <br />
                Dept Name  :     {deptObj.dname}    <br />
                Dept Location  : {deptObj.loc}    <br />
            </div>
        </>
    );
}

export default DeptDetails;