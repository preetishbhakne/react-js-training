function  CitiesList()
{
      // Array
  let citiesArray = ["Hyderabad", "Mumbai", "Pune", "Chennai", "Goa"];

  let result =  citiesArray.map( (item,index) => 
            <li key={index}> {item} </li>  
            );
  
    return (
        <>
			<ul>
                    {result}
            </ul>
        </>
    );
}

export default CitiesList;