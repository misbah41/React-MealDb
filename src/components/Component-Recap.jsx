
import React, { useState } from 'react';
import RandomUser from './random-user';


export default function ComponentRecap() {
  const devNames = ['Misbah Hasan', 'Web Developer', 'Abu Taher', 'Web Designer'];

  const friendsName = [
    {name: 'Misbah Hasan', age:21, bio:"I'm a Full Stack Javascript Developer "},
    {name: 'Md Jabir Ahmed', age:25, bio:"I'm a Creative Graphichs Designer "},
    {name: 'Alomgir Hussain', age:20, bio:"I'm a Building Painter "},
    {name: 'Abul Kshem', age:27, bio:"I'm a Foregner In Oman Moquet "},
    {name: 'Abu Musa', age:18, bio:"I'm a Full Stack Bondho "},
    {name: 'Mustakim Mahmud', age:17, bio:"I'm a Germent Manager "},
  ];

  return (
    <div className="container">
      <RandomUser />
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card text-center mt-3">
            <PropsComponent name={devNames[0]} bio={devNames[1]} />
          </div>
          <div className="card text-center mt-3">
            <PropsComponent name={devNames[2]} bio={devNames[3]} />
          </div>
          <div className="card text-center mt-3">
            <Counter />
          </div>
        </div>
      </div>
      <div className="row">
          {
            friendsName.map(friend => <div className="col-sm-6 col-md-4"><div className="card mt-5 text-center"><Friends name={friend.name} age={friend.age} bio={friend.bio}/></div></div>  )
          }
      </div>
      
    </div>
  )
}


const Friends = (props)=>{

  return(
    <>
    <h3>{props.name}</h3>
    <small>Age: {props.age}</small>
    <p>{props.bio}</p>
    <button className="btn btn-warning">Get Details Bio</button>
    </>

  )
}












const Counter = () => {
  const [count, setcount] = useState(5);


  return (
    <>
      <button
        onClick={() => setcount(count - 1)}
        className="btn btn-primary">Decrease</button>
      <h2>{count}</h2>
      <button
        onClick={() => setcount(count + 1)}
        className="btn btn-primary">Increase</button>
    </>
  )
}



//props app function
const PropsComponent = (props) => {

  return (
    <>
      <h3>{props.name}</h3>
      <small>{props.bio}</small>
    </>
  )
}

