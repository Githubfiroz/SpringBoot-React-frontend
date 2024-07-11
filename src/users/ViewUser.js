import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ViewUser() {
  
  //let navigate=useNavigate();

  const [user, setUsers] = useState({
    name:   "",
    username:   "",
    email:  "",
});

const {id} = useParams()

const{name, username,email}=user;

useEffect(() => {      
  loadUsers();
}, []);

const loadUsers = async () => {
  const result = await axios.get(`http://localhost:8080/user/${id}`)
  setUsers(result.data)
}

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4"> User Details</h2>
                <div className="card">
                  <div className="card-header">
                    <b>Details of user id :</b> {user.id}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Name:</b> {user.name}
                      </li>
                      <li className="list-group-item">
                        <b>UserName:</b> {user.username}
                      </li>
                      <li className="list-group-item">
                        <b>Email:</b> {user.email}
                      </li>
                    </ul>
                  </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}