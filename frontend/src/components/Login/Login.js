import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/users/userActions';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import your custom CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('shreyas@gmail.com');
  const [password, setPassword] = useState('12345678');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginDetails = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLoginDetails;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='login-card'>
            <div className='login-header'>
              <h1>Login</h1>
            </div>
            <form onSubmit={submitFormHandler}>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info btn-block'>
                Login
              </button>
            </form>
            {loading && <Loading />}
            {error && <ErrorMessage error={error} />}
            <div className='register-link'>
              Don't have an account? <Link to='/register'>Register here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
