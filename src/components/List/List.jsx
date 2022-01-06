import './List.css'

//components
import { useState } from 'react';

//Components
import BirthdayUser from "../BirthdayUser/BirthdayUser";

//hook
import FetchData from '../../hooks/Fetchdata';


const List = () => {

    const {data, loading, error} = FetchData();
    console.log(data)

    return (
        <div className='List'>
            {data.map(user => <BirthdayUser key={user.id} data={user}/> )}
            
        </div>
    )
}

export default List;