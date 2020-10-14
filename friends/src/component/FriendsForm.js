import React, { useState, useEffect } from 'react'
import FriendsList from './FriendsList'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './FriendsForm.css'

function FriendsForm(props) {
   
   // States
   const [friendsList, setFriendsList] = useState([])

   const [value, setValue] = useState({
      id: Date.now(),
      name: '',
      age: '',
      email: '',
   })

   // this will bring a 'friends' data from server with 
   useEffect(() => {
      
      const token = localStorage.getItem('token')
   
      // GET the friends data IF authorization token is EXIST.
      // So, headers: { authorization: token } get first post into the server and authorize it
      // then, you get a data once the token is exist.
      axiosWithAuth()
         .get('/api/friends', {
            headers: {
               authorization: token,
            }
         })
         .then(res => setFriendsList(res.data))
      

   }, [])
   // even we don't have dependencies, the useEffect won't repeat infinite, 
   // because there are no state update in this component



   // Add and Delete friends
   const addFriend = () => {
      setFriendsList([...friendsList, value])
   }


   // Handlers
   const handleChange = (e) => {
      setValue({
         ...value,
         [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      setValue({
         id: Date.now(),
         name: '',
         age: '',
         email: '',
      })
   }

   return (
   <>
      <div className='friends'>
         <h1>Add Friends</h1>
         <form className='friends___form' onSubmit={handleSubmit}>
            <label className='friends___label' htmlFor='name' autoComplete='off'>
               Name
               <input name='name' value={value.name} onChange={handleChange} autoComplete='off'/>
            </label>
            <label className='friends___label' htmlFor='age'>
               Age
               <input name='age' value={value.age} onChange={handleChange} autoComplete='off'/>
            </label>
            <label className='friends___label' htmlFor='email'>
               Email
               <input name='email' type='email' value={value.email} onChange={handleChange} autoComplete='off'/>
            </label>
            <button type='submit' onClick={addFriend}>Add friend</button>
            <button onClick={() => {
               localStorage.removeItem('token')
               props.history.push('/login')
            }}>Logout</button>
         </form>
      </div>
      <div className='friends___list'>
         {
            friendsList.map((eachFriend)=> {
               return <FriendsList key={eachFriend.id} eachFriend={eachFriend} />
            })
         }
      </div>
   </>
   )
}

export default FriendsForm
