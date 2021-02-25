
import React, { useState, useEffect } from 'react'
import './user.css';


export default function RandomUser() {
  const [users, setUsers] = useState([])


  const getUsers = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }
  useEffect(() => {
    getUsers()
  }, []);



  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="user-container ">
            {
              users.map(user => <UserBio img={user.picture.large} name={user.name.first + ' ' + user.name.last} gender={user.gender} age={user.registered.age} city={user.location.city} email={user.email} phone={user.phone} />)
            }
          </div>
        </div>
      </div>

    </>
  )

}


const UserBio = (props) => {
  return (
    <>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <small>Gender {props.gender}</small>
      <p>Age {props.age}</p>
      <p>City {props.city}</p>
      <p>Email {props.email}</p>
      <p>Phone {props.phone}</p>
    </>
  )
}






