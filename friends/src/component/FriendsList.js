import React from 'react'
import './FriendsList.css'

function FriendsList({ eachFriend }) {
   return (
      <div className='friends___list'>
         <p>Name: {eachFriend.name}</p>
         <p>Age: {eachFriend.age}</p>
         <p>Email: {eachFriend.email}</p>
      </div>
   )
}

export default FriendsList
