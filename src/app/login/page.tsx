import { BsApple } from 'react-icons/bs';
import { FaGoogle } from 'react-icons/fa';

import './style.css';

export default function page() {
  return (
    <div className='container mx-auto flex items-center justify-center my-12'>
      <div className='form w-[440px] max-w-md px-10 py-8 shadow-custom'>
        <h1 className='text-center text-2xl'>Login to your account 👏</h1>

        <div className='flex gap-4 mt-4 social-login'>
          <button className='google'>
            <FaGoogle />
            Use Google
          </button>
          <button className='google'>
            <BsApple />
            Use Apple
          </button>
        </div>
        <div className='divider'>
          <div className='line'></div>
          <p>Or</p>
          <div className='line'></div>
        </div>

        <form>
          <label htmlFor='email'>Email:</label>
          <div className='custome-input'>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              autoComplete='off'
            />
            <i className='bx bx-at'></i>
          </div>
          <label htmlFor='password'>Password:</label>
          <div className='custome-input'>
            <input
              type='password'
              name='password'
              placeholder='Your Password'
            />
            <i className='bx bx-lock-alt'></i>
          </div>
          <button className='login'>Login</button>
          <div className='links'>
            <a href='#'>Reset Password</a>
            <a href='#'>Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
}
