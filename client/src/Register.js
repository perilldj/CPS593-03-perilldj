
function Register() {
  return (
    <div>
      <br/>
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="registerPassword" placeholder="Password"></input>
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm"></input>
        </div>
        <br/>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </div>
  );
}

export default Register;
