import { useEffect , useState} from "react";
import Usefetch from "./useFetch";

const Tasklist = () => {

    let{ data : lists , pending , error} = Usefetch("http://localhost:4000/data")

    const [task, settask] = useState([]);

    useEffect(()=>{

        localStorage.setItem("task",[])
    },[])

    let handleTask = (id)=>{

        let x = localStorage.getItem("task")
        x=JSON.parse(x)
        x.push(id)
            x= JSON.stringify(x)
            localStorage.setItem("task" ,x); 
            alert("Task added")
    }


    return ( 
    <div className="tasklist">

       <label htmlFor="">Task</label>
       < input type="text" />
        <button onClick={()=>{ handleTask(lists.id)}}>Add</button>
        
    </div> );
}
 
export default Tasklist;