

const BirthdayUser = ({user}) => {
    return(
        <div className='person'>
        <img src={user.image} alt='birthday user'/>
        <h4>{user.name}</h4>
        <p>{user.age}</p>
        </div>
    )
}

export default BirthdayUser;