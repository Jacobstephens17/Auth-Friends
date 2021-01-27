import React from 'react'


const RemoveFriend = (props) => {
    
    
    const removeFriend = () => {
        props.removeFriend(props.friend.id)
    }


    return(
        <div>
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button onClick={removeFriend}>RemoveFriend</button>
        </div>
    )
}
export default RemoveFriend;