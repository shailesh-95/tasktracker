import Addtask from "./Addtask";
import Usefetch from "./useFetch";


const Home = () => {

   let{ data : lists , pending , error} = Usefetch("http://localhost:4000/data")


    return (
        <div>
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading...</h1>}

              {lists && <Addtask lists={lists} />}
              
        </div>
      );
}
 
export default Home;