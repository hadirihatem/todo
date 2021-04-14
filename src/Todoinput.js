import { addTodo } from './redux/Action'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
const Todoinput = () => {
    const [name, setName] = useState();
    let  dispatch = useDispatch();
    return (
        <div>
      <div className='row m-2'>
          
          <input
           value={name}
           onChange={(e)=>setName(e.target.value)}
           type="text" className="col form-control"/>
          <button
             onClick={()=>{
                 dispatch(addTodo(
                    {
                        id:uuid(),
                        name:name,
                        done:false
                   }       
        ));      
    setName('');
}}
            className="btn btn-primary mx-2">Add</button>
      </div>
        </div>
    )
}

export default Todoinput
