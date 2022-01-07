import { useState } from 'react'

//Components
import BirthdayUser from "../BirthdayUser/BirthdayUser";
import data from '../../data';


const List = () => {
    const [users, setUsers] = useState(data)

    return (
        <div className='container'>
            <h3>{users.length} Birthdays today</h3>
            {users.map(user => 
                <BirthdayUser key={user.id} user={user}/>
            )}
            <button onClick={() => setUsers([])}>Delete list</button>
        </div>
    )
}

export default List;