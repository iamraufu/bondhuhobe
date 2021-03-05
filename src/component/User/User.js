import React,{useState} from 'react';
import './User.css';


const User = (props) => {
      const { id, username, email, first_name, last_name, university, department, job_title, gender, image } = props.user;
      const full_name = first_name + " " + last_name;
      const clickToConnect = props.clickToConnect;
      const [ID, setID]= useState();
      const showId =()=>{setID(id)};
      return (
            <div className="card">
                  <div>
                        <div className="image">
                              <img src={image} alt="" />
                        </div>
                        <div className="details">
                              <h2>{full_name}</h2>
                              <p>
                                    <br />
                              University: {university}
                                    <br />
                                    <br />Id: {ID}
                                    <br />
                              Department: {department}
                                    <br />Username: {username}
                                    <br />{email}
                                    <br />Job: {job_title}
                                    <br />{gender}
                              </p>
                        </div>
                  </div>
                  <button onClick={showId}>Click to get Id</button>
                  <button onClick={() =>{clickToConnect(full_name)} }>Click to Connect</button>
            </div>
      );
};

export default User;