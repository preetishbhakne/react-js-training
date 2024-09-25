function UserInfo()
{
    // Scalar Variables
  let uname = "Scott";
  let age = 25;
  let email = "scott@gmai.com";

    return (
        <>   
        <h3>Scalar Data</h3>
        User Name :   {uname}    <br />
        User Age :   {age}    <br />
        User Email  :   {email}    <br />      
        </>
    );
}

export default UserInfo;