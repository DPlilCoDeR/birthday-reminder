import './List.css'

//components
import BirthdayUser from "../BirthdayUser/BirthdayUser";

//hook
import { FetchData } from '../../hooks/fetchdata';


const List = () => {

    const {users} = FetchData()

    return (
        <div className='List'>
            <BirthdayUser data={'hello'}/>
        </div>
    )
}

export default List;