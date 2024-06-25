
function Login() {
  return (
    <div>
      <br/>
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Password"></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary btn-dark">Login</button>
      </form>
    </div>
  );
}

export default Login;
