import { fetchData } from "../../main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
    password2: ''
  });

  const {username, password, password2} = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)

    fetchData('/user/register',
      {
        username,
        password
      },
      "POST")
    .then((data)=> {
      if(!data.message) {
        console.log(data);
        localStorage.setItem('username', username);
        navigate("/profile");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <br/>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input type="text" 
                 className="form-control" 
                 id="username" 
                 name='username'
                 placeholder="Enter username" 
                 onChange={onChange}
                 value={username}></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" 
                 className="form-control" 
                 id="password" 
                 name="password"
                 placeholder="Password"
                 onChange={onChange}
                 value={password}></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="text" 
                 className="form-control" 
                 id="password2" 
                 name="password2"
                 placeholder="Confirm"
                 onChange={onChange}
                 value={password2}></input>
        </div>
        <br/>
        <input type="submit" className="btn btn-dark" value="Register"></input>
      </form>
    </div>
  );
}

export default Register;
