import './styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { authorize } from '../../utils/authorize';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logInUser } from './../../actions/userActions';

const LogIn = () => {
  const [errormsg, setErrorMsg] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  //   authorize(token).then(result => {
  //     if (result.success) {
  //       dispatch(logInUser(result.user));
  //       navigate('/buy');
  //     } else if (result.remove) {
  //       localStorage.removeItem('access_token');
  //     }
  //   });
  // }, [dispatch, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: e.target[0].value,
        password: e.target[1].value
      });
      
      if (res.data.success) {
        localStorage.setItem('access_token', res.data.token);
        dispatch(logInUser(res.data.user));
        navigate('/buy');
      } else {
        setErrorMsg(res.data.msg);
        setError(true);
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
      setError(true);
    }
  };

  return (
    <div className="container-login100">
      {location.state?.success && (
        <div className="alert alert-success">
          <strong>Success: </strong> {location.state.msg}
        </div>
      )}
      {error && (
        <div className="alert alert-danger">
          <strong>Error: </strong> {errormsg}
        </div>
      )}
      <form className="loginform" onSubmit={handleSubmit}>
        <h1 id="title">Want to sell? Want to Buy?<br />BESit Karo. Lite lo.</h1>
        <div className="form-group">
          <div className="wrap-input100 validate-input" data-validate="Enter username">
            <label htmlFor="Username">Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" />
            <span className="focus-input100" data-placeholder="&#xf207;"></span>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary" id="index-submit">Submit</button>
          <span className="psw">Don't have an account? <Link to="/signup" id="forgot"> Register now.</Link></span>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
