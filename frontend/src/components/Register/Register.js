import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { registerUser } from '../../redux/actions/users/userActions';
import Loading from '../Loading/Loading';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
  };

  if (userInfo) {
    navigate('/');
  }

  return (
    <div className='register-container'>
      <div className='register-card col-md-6 col-lg-4'>
        <div className='register-header'>
          <h1>Register</h1>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              className='form-control'
              id='email'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              autoComplete='current-password'
            />
          </div>
          <button type='submit' className='btn btn-info btn-block'>
            Register
          </button>
        </form>
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        <div className='login-link'>
          Already have an account? <Link to='/login'>Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
