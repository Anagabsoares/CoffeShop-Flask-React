const ExternalApi = () => {
  const [drink, setDrinks] = useState([]);
  

  const { getAccessTokenSilently } = useAuth0();

  

  const getDetailjwt = async () => {
    try {
      const token = await getAccessTokenSilently();
      const serverUrl = 'http://127.0.0.1:5000/';

      // create a function for each endpoint
      const response = await fetch(
        `${serverUrl}\drinks-detail`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    const responseData = await response.json();
    console.log(responseData)
    const renderbase = Object.entries(responseData.drinks).map(([key, value]) =>{
    return(
      
      <ul key={key}>
        Drink Id: [{value.id}] 
       <li> Drink Title : {value.title} </li>
       <li>RECIPE: {JSON.stringify(value.recipe)}</li>
      </ul> )
    })
    console.log(responseData)
 
    setDrinks(renderbase);
    
    } catch (error) {
      setDrinks(error.error);
    }
  };



  return (
    <div className="container">
      <h1>DRINKS</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
    
        <button
          type="button"
          className="btn btn-primary"
          onClick={getDetailjwt}
        >
          Get Drinks detail
        </button>
      
      </div>
      {drink && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{drink}</code>
            </div>
          </div>
        </div>
      )}
      
    </div>    
        
  );
};


export default ExternalApi 