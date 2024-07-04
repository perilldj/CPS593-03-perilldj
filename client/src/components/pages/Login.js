import { fetchData } from "../../main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const {username, password} = user;

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user)

    fetchData('/user/login',
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
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email address</label>
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
        <button type="submit" className="btn btn-primary btn-dark">Login</button>
      </form>
    </div>
  );
}

export default Login;
