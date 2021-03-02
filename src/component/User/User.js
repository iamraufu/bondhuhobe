import React from 'react';
import './User.css';

const User = (props) => {
      console.log(props)
      const { id, username, email, first_name, last_name, university, department, job_title, gender, image } = props.user;
      return (
            <div className="card">
                  <div>
                  <div className="image">
                        <img src={image} alt="" />
                  </div>
                  <div className="details">
                  <h2>{first_name} {last_name}</h2>
                        <p>
                              <br />
                              University: {university}
                              <br />
                              <br/>{id}
                              Department: {department}
                              <br/>Username: {username}
                              <br/>{email}
                              <br/>Job: {job_title}
                              <br/>{gender}
                        </p>
                  </div>
                  </div>
                  <button onClick={()=>window.scrollTo(0, 0)}>Click to Connect</button>
            </div>
      );
};

export default User;