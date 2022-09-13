

const Addtask = ({lists}) => {

    




    return ( 

        <div>
               {
                lists &&
                lists.map((list)=>{
                    return(
                        
                        <div key={list.id}>
                            <table cellPadding={10} cellSpacing={30} border={10} align={"center"}>
                            <tr>
                                <th>TASK NAME</th>
                                <th>STORED DATE</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                                <tr>
                                <td>{list.taskName}</td>
                                <td>{list.date}</td>
                                <td>{list.status}</td>
                                <button>Copmleted</button>
                            </tr>
                           </table>  
                        </div>
                        
                    )
                })
               }

        </div>
     );
}
 
export default Addtask;